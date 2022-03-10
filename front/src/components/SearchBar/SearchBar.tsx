import * as React from 'react';
import Flask from "../../styles/svg/flask.svg";
import Lung from "../../styles/svg/lung.svg";

const situations = [
    "Situation",
    "Métastatique",
    "Général"
]

const specialities = [
    "Spécialité",
    "Gynécologie",
    "Thoracique"
]

interface IProps {
    callback: any
    setOrgan: any,
    setSituation: any,
    setClinicalId: any,
    setSpeciality: any
}

export const SearchBar: React.FC<IProps> = (props) => {

    const handleClickSituation = (e: any) => {
        if (e.target.value === situations[0])
            return;
        props.setSituation(e.target.value);
    }


    const handleClickSpeciality = (e: any) => {
        if (e.target.value === specialities[0])
            return;
        props.setSpeciality(e.target.value);
    }

    return (
        <div className="container mx-auto flex justify-center items-center px-6">
            <div className="w-2/3 p-4 grid grid-cols-1 gap-6 bg-white shadow-lg rounded-lg text-sm">
                <div className="grid grid-cols-1">
                    <div className="grid grid-cols-2 gap-2 border border-gray-600 p-2 rounded divide-x-2">
                        <div className="flex rounded items-center w-full">
                            <img src={Lung} className="w-9 h-9 px-2"/>
                            <input type="text" placeholder="Organe cible (Exemple: Poumon)"
                                   className="w-full focus:outline-none text-gray-700"
                                   onChange={(event => props.setOrgan(event.target.value))}
                            />
                        </div>
                        <div className="flex rounded items-center w-full">
                            <img src={Flask} className="w-9 h-9 px-2"/>
                            <input type="text" placeholder="Identifiant de l'essai clinique (Exemple: NC01)"
                                   className="w-full focus:outline-none text-gray-700"
                                    onChange={(event => props.setClinicalId(event.target.value))}/>
                        </div>
                    </div>
                </div>

                <div className="flex">
                    <p className="text-gray-600 pt-3.5 pr-8">FILTRER PAR</p>
                    <div className="grid grid-cols-2 gap-2 border border-cyan-400 p-2 divide-x-2 divide-cyan-200">
                        <select className="bg-white text-cyan-400 hover:text-teal-600 p-2">
                            {situations.map((situation: string) => (
                                <option onClick={handleClickSituation}>{situation}</option>
                            ))}
                        </select>
                        <select className="bg-white text-cyan-400 hover:text-teal-600 p-2">
                            {specialities.map((speciality: string) => (
                                <option onClick={handleClickSpeciality}>{speciality}</option>
                            ))}
                        </select>
                    </div>

                    <div className="justify-end">
                        <button onClick={props.callback}
                            className="p-4 bg-cyan-500 text-white hover:bg-teal-600 shadow-lg shadow-teal-500/40">Effectuer une recherche</button>
                    </div>
                </div>
            </div>

        </div>
    );
}
