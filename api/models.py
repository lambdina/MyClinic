#!/usr/bin/env python

from sqlalchemy import Column, types
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class ClinicalTrial(Base):
    __tablename__ = 'clinical_trials'

    id = Column(Integer, primary_key=True)
    id_bis = Column(String(5), unique=True)
    speciality = Column(String(100))
    organ = Column(String(100))
    situation = Column(String(100))

    @property
    def serialize(self):
        return {
            'id': self.id,
            'id_bis': self.id_bis,
            'speciality': self.speciality,
            'organ': self.organ,
            'situation': self.situation
        }

if __name__ == "__main__":
    from sqlalchemy import create_engine
    from settings import DB_URI
    engine = create_engine(DB_URI)
    Base.metadata.drop_all(engine)
    Base.metadata.create_all(engine)
