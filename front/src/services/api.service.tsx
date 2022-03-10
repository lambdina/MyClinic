import {IClinicalTrialReq} from "../types/clinicalTrial.types";
import axios from "axios";
import {API_URL} from "./api.url";

export function getClinicalTrialList(params: IClinicalTrialReq) {
    return axios.get(API_URL + "/clinical_trial", {params: params});
}