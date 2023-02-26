import requests
import json

url = 'http://localhost:5000/api/trips'

data = {
    'name': 'NYC Trip',
    'locations': [
        'New Brunswick',
        'NY Penn Station',
        'Destination'
    ],
    'itinerary': 'Train there, then go to Times Square and eat fine dining NY Pizza. Yum!'
}

headers = {
    'Content-Type': 'application/json'
}

response = requests.post(url, data=json.dumps(data), headers=headers)

print(response.status_code)
print(response.text)
