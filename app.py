from flask import Flask, request, render_template
#from flask_cors import CORS

app = Flask(__name__)
#CORS(app)


@app.route('/')
@app.route('/home')
def home():
    return "<h1>Test</h1>"

if __name__ == '__main__':
    app.run(debug=True)


