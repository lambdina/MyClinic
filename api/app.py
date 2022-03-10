#!/usr/bin/env python

from flask import Flask
from flask_restful import Api
from flask_cors import CORS

app = Flask(__name__)
api = Api(app)
CORS(app, origins="http://localhost:3000")

from resources import ClinicalTrialResource
from resources import ClinicalTrialListResource

api.add_resource(ClinicalTrialListResource, '/clinical_trial', endpoint='clinical_trials')
api.add_resource(ClinicalTrialResource, '/clinical_trial/<string:id>', endpoint='clinical_trial')

if __name__ == '__main__':
    app.run(debug=True)
