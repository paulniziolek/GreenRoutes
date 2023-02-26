import os
import openai
import json
from dotenv import load_dotenv
load_dotenv()


def iGenerator(startLoc, endLoc):
# Load your API key from an environment variable or secret management service
    
    openai.api_key = os.getenv('OPENAI_API_KEY')
    prompt = "In an ecological manner doing outdoor activities, make me an activities guide within a reasonable amount of time in the way of an itenary on my way from" + startLoc +  " to " + endLoc + "\n For example: \n Time = HH:MM \n decisions = a location someone might want to stop at AM/PM examples: \n time: decisions"
    response = openai.Completion.create(model="text-davinci-003", prompt= prompt, temperature=0.7, max_tokens=1200)
    responseText = response.choices[0].text
    
    return responseText
    
