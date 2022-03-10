import {IClinicalTrialReq} from "../../types/clinicalTrial.types";
import React, {useState} from "react";
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';

interface IResultCardProps extends IClinicalTrialReq {
    saveToFavorites: any
}


export const ResultCard: React.FC<IResultCardProps> = (result) => {

    const [isSaved, setSave] = useState(false);

    const handleSave = (e: any) => {
        if (isSaved) {
            setSave(false);
            result.saveToFavorites("");
        } else {
            setSave(true);
            result.saveToFavorites(result.id_bis);
        }
    }

    return (
        <div className="bg-white w-3/5 lg:flex shadow shadow-lg py-1.5">
            <div className="bg-white h-full lg:w-1/3 py-4 px-2.5 block h-full">
                    <img className="bg-white rounded" src={"https://www.ukri.org/wp-content/uploads/2021/03/MRC-150321-GettyImages-1204793213-735x490.jpg"}/>
            </div>
            <div className="w-full lg:w-11/12 xl:w-full bg-white py-5 lg:px-6 lg:py-2 tracking-wide">
                <div className="flex flex-row lg:justify-start justify-center">
                    <div className="text-gray-700 font-medium text-sm text-center lg:text-left px-2">
                        Identifiant de l'essai : {result.id_bis}
                    </div>
                </div>
                <div className="font-semibold text-gray-800 text-xl text-center lg:text-left px-2">
                    {result.speciality}
                </div>

                <div className="flex py-4">
                    <div className="text-cyan-400 rounded-full border border-cyan-400 focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2">
                        {result.organ}
                    </div>
                    <div className="text-gray-400 rounded-full border border-gray-400 bg-white  focus:ring-4 focus:ring-teal-300 dark:focus:ring-teal-800 font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2">
                        {result.situation}
                    </div>
                </div>
            </div>
            <div
                className="flex flex-row items-center w-full lg:w-1/3 bg-white lg:justify-end justify-center pr-2 py-4 lg:px-6">
                {isSaved && <FavoriteSharpIcon style={{color: 'red'}} onClick={handleSave} />}
                {!isSaved && <FavoriteBorderSharpIcon style={{color: 'gray'}} onClick={handleSave} />}

            </div>
        </div>

    );
}