from flask import Flask, request, render_template
from flask_sqlalchemy import SQLAlchemy
from flask import request, jsonify
#from flask_cors import CORS

app = Flask(__name__)
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

@app.route('/api/trips')
def get_trips():
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

@app.route('/api/trips', methods=['POST'])
def create_trip():
    data = request.get_json()

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


if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)


