import {IClinicalTrialReq} from "../../types/clinicalTrial.types";
import React, {useEffect, useState} from "react";
import {Navbar} from "../Navbar";
import {getClinicalTrialList} from "../../services/api.service";
import {AxiosResponse} from "axios";
import {Outlet, useSearchParams} from "react-router-dom";
import {SearchBar} from "../SearchBar";
import {ResultCard} from "./ResultCard";
import {Footer} from "../Homepage";

export function SearchResults() {
    const [searchTerm, setSearchTerm] = useSearchParams();
    const [queries, setQueries] = useState<IClinicalTrialReq[] | undefined>([]);
    const [queryIsMade, setQueryIsMade] = useState(false);

    useEffect(() => {

        if (queryIsMade)
            return;

        const params = {
            id_bis: searchTerm.get("clinicalTrialIdBis"),
            organ: searchTerm.get("organ"),
            situation: searchTerm.get("situation"),
            speciality: searchTerm.get("speciality")
        }
        getClinicalTrialList(params as IClinicalTrialReq).then((response: AxiosResponse) => {
            setQueries(response.data);
            setQueryIsMade(true);
        }).catch((err: any) => {});
    }, [queries, searchTerm, queryIsMade, setQueryIsMade]);

    const saveToFavorites = (e: any) => {

    }
    return (

        <div className="leading =normal tracking-normal text-white bg-teal-50">
            <Navbar />
            <Outlet />

            <div className="py-4" />
                    <SearchBar setSpeciality={(value: any) => setSearchTerm({"speciality": value})}
                               setClinicalId={(value: any) => setSearchTerm({"id_bis": value})}
                               setSituation={(value: any) => setSearchTerm({"situation": value})}
                               setOrgan={(value: any) => setSearchTerm({"organ": value})}
                               callback={(e: any) => setQueryIsMade(false)}
                    />
                    {!queries && <h1>Aucun résultat pour votre recherche</h1>}
                    {queries &&
                        <div>
                            <h1 className="text-xl text-gray-600 py-4 font-medium">{queries.length} essai(s) clinique(s) pour votre recherche</h1>
                        <div className="grid grid-cols-1 place-items-center space-y-8 py-4">
                            { queries.map((result: IClinicalTrialReq) => (
                                    <ResultCard saveToFavorites={saveToFavorites} id_bis={result.id_bis}
                                                organ={result.organ} situation={result.situation} speciality={result.speciality}
                                />))
                            }
                            </div>
                        </div>
                    }
                    <Footer />
                </div>
    );
}