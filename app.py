from flask import Flask, request, render_template
from flask_sqlalchemy import SQLAlchemy
from flask import request, jsonify
from flask_cors import CORS
from itenaryGenerator import iGenerator

app = Flask(__name__)
CORS(app)
app.config['SECRET_KEY'] = '8d57e6c31466df4e332253b6a2c926c1'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///greenroutes.db'
db = SQLAlchemy(app)

# incomplete db model
"""
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), unique=True, nullable=False)
"""

class Trip(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40))
    itinerary = db.Column(db.Text)
    locations = db.relationship('Locations', backref='trip')


class Locations(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40))
    trip_id = db.Column(db.Integer, db.ForeignKey('trip.id'))


@app.route('/')
@app.route('/home')
def home():
    return "<h1>Home Page (Test)</h1>"

@app.route('/api/trips', defaults={'trip_id': None})
@app.route('/api/trips/<int:trip_id>')
def get_trips(trip_id):
    if trip_id:
        trip = Trip.query.get(trip_id)
        if trip is None:
            return jsonify({'error': 'Trip not found.'}), 404
        locations = [location.name for location in trip.locations]
        result = {
            'id': trip.id,
            'name': trip.name,
            'itinerary': trip.itinerary,
            'locations': locations
        }
        return jsonify(result)
    else:
        trips = Trip.query.all()
        results = []
        for trip in trips:
            locations = [location.name for location in trip.locations]
            results.append({
                'id': trip.id,
                'name': trip.name,
                'itinerary': trip.itinerary,
                'locations': locations
            })
        return jsonify(results)

@app.route('/api/trips/<int:trip_id>', methods=['PUT'])
def update_trips(trip_id):
    if trip_id:
        trip = Trip.query.get(trip_id)
        if trip is None:
            return jsonify({'error': 'Trip not found.'}), 404

        data = request.get_json()
        if 'name' in data:
            trip.name = data['name']
        if 'itinerary' in data:
            trip.itinerary = data['itinerary']
        if 'locations' in data:
            # remove old locations
            for location in trip.locations:
                db.session.delete(location)
            # create new locations
            new_locations = []
            for location_name in data['locations']:
                new_location = Locations(name=location_name)
                new_location.trip = trip
                new_locations.append(new_location)
            db.session.add_all(new_locations)

        db.session.commit()

        locations = [location.name for location in trip.locations]
        result = {
            'id': trip_id,
            'name': trip.name,
            'itinerary': trip.itinerary,
            'locations': locations
        }
        return jsonify(result)



"""
    trips = Trip.query.all()
    results = []
    for trip in trips:
        locations = [location.name for location in trip.locations]
        results.append({
            'id': trip.id,
            'name': trip.name,
            'itinerary': trip.itinerary,
            'locations': locations
        })
    return jsonify(results)
"""

@app.route('/api/trips', methods=['POST'])
def create_trip():
    data = request.get_json()

    # Creating default itinerary based on OpenAI API and data provided
    data['itinerary'] = iGenerator(data['locations'][0], data['locations'][1])

    # Creates trip and location instances
    new_trip = Trip(name=data['name'], itinerary=data['itinerary'])
    new_locations = []
    for location_name in data['locations']:
        new_location = Locations(name=location_name)
        new_location.trip = new_trip
        new_locations.append(new_location)
    
    # Add new trip and locations to the database session
    db.session.add(new_trip)
    db.session.add_all(new_locations)

    db.session.commit()
    return jsonify({'message': 'Trip created successfully.'})

@app.route('/api/trips', methods=['DELETE'])
def delete_trip():
    data = request.get_json()
    trip_id = data.get('trip_id')
    trip = Trip.query.get(trip_id)

    if trip is None:
        return jsonify({'error': 'Trip not found.'}), 404
    
    db.session.delete(trip)
    db.session.commit()

    return jsonify({'message': f'Trip {trip_id} deleted successfully.'})




if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)


