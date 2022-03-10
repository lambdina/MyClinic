from flask import jsonify

from models import ClinicalTrial
from db import session

from flask_restful import reqparse
from flask_restful import abort
from flask_restful import Resource
from flask_restful import fields
from flask_restful import marshal_with

clinical_trials_fields = {
    'id': fields.Integer,
    'id_bis': fields.String,
    'uri': fields.Url('clinical_trial', absolute=True),
    'speciality': fields.String,
    'organ': fields.String,
    'situation': fields.String
}

parser = reqparse.RequestParser()
parser.add_argument('id_bis', type=str)
parser.add_argument('speciality', type=str)
parser.add_argument('organ', type=str)
parser.add_argument('situation', type=str)


class ClinicalTrialResource(Resource):
    @marshal_with(clinical_trials_fields)
    def get(self, id):
        clinical_trials = session.query(ClinicalTrial).filter(ClinicalTrial.id == id)
        if not clinical_trials:
            abort(404, message="Clinical Trial with id {} doesn't exist".format(id))
        return clinical_trials

    def delete(self, id):
        clinical_trials = session.query(ClinicalTrial).filter(ClinicalTrial.id == id).first()
        if not clinical_trials:
            abort(404, message="Clinical Trial with id {} doesn't exist".format(id))
        return {}, 204


class ClinicalTrialListResource(Resource):
    def get(self): # TODO: factorize this ugly thing with attributes
        args = parser.parse_args()
        print(args)
        clinical_trials = None
        if args['organ']:
            clinical_trials = self.filter_by_organ(args["organ"], clinical_trials)
        if args['id_bis']:
            clinical_trials = self.filter_by_id_bis(args["id_bis"], clinical_trials)
        if args["speciality"]:
            clinical_trials = self.filter_by_speciality(args["speciality"], clinical_trials)
        if args['situation']:
            clinical_trials = self.filter_by_situation(args["situation"], clinical_trials)
        if clinical_trials is None:
            clinical_trials = session.query(ClinicalTrial).all()
        return jsonify([ct.serialize for ct in clinical_trials])

    def filter_by_organ(self, organ: str, clinical_trials_object=None):
        if clinical_trials_object is None:
            return session.query(ClinicalTrial).filter(ClinicalTrial.organ == organ)
        return clinical_trials_object.filter(ClinicalTrial.organ == organ)

    def filter_by_id_bis(self, id_bis: str, clinical_trials_object=None):
        if clinical_trials_object is None:
            return session.query(ClinicalTrial).filter(ClinicalTrial.id_bis == id_bis)
        return clinical_trials_object.filter(ClinicalTrial.id_bis == id_bis)

    def filter_by_speciality(self, speciality: str, clinical_trials_object=None):
        if clinical_trials_object is None:
            return session.query(ClinicalTrial).filter(ClinicalTrial.speciality == speciality)
        return clinical_trials_object.filter(ClinicalTrial.speciality == speciality)

    def filter_by_situation(self, situation: str, clinical_trials_object=None):
        if clinical_trials_object is None:
            return session.query(ClinicalTrial).filter(ClinicalTrial.situation == situation)
        return clinical_trials_object.filter(ClinicalTrial.situation == situation)

    @marshal_with(clinical_trials_fields)
    def post(self):
        args = parser.parse_args()

        if self.filter_by_id_bis(args["id_bis"]).count() > 0:
            return abort(401, message=f"Clinical trial {args['id_bis']} already exists!")

        clinical_trials = ClinicalTrial(id_bis=args["id_bis"],
                                        organ=args["organ"],
                                        speciality=args["speciality"],
                                        situation=args["situation"])
        session.add(clinical_trials)
        session.commit()
        return clinical_trials, 201
