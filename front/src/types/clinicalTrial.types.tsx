export interface IClinicalTrial {
    clinicalTrialIdBis: string,
    clinicalTrialId: number,
    organ: string,
    situation: string,
    speciality: string
}

export interface IClinicalTrialReq {
    id_bis: string,
    organ: string,
    situation: string,
    speciality: string
}

export const clinicalTrial: IClinicalTrial = {
    clinicalTrialIdBis: "",
    clinicalTrialId: -1,
    organ: "",
    situation: "",
    speciality: ""
}