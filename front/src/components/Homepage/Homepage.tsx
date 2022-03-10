import TopWaves from '../../styles/svg/top_waves.svg'
import WorldMap from '../..//styles/svg/world_map.svg'
import BottomWaves from '../../styles/svg/bottom_waves.svg'
import {Footer} from './Footer';
import {Navbar} from "../Navbar";
import {SearchBar} from "../SearchBar";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

export function Homepage() {
    const [organ, setOrgan] = useState("");
    const [situation, setSituation] = useState("");
    const [speciality, setSpeciality] = useState("");
    const [clinicalId, setClinicalId] = useState("");
    const navigate = useNavigate();

    const handleSearchCallback = (e: any) => {
        navigate(`/search?organ=${organ}&speciality=${speciality}&situation=${situation}&id_bis=${clinicalId}`);
    }

    return (
        <div className="leading =normal tracking-normal text-white gradient">
            <Navbar />
            <div className="pt-18">
                    <div className="flex items-start justify-center text-2xl font-bold py-12">
                            Trouvez le bon essai clinique en quelques clics
                    </div>
            </div>

            <SearchBar callback={handleSearchCallback} setClinicalId={setClinicalId} setOrgan={setOrgan}
                        setSituation={setSituation} setSpeciality={setSpeciality}/>
            <div className="relative">
                <img src={TopWaves} alt="Waves" />
            </div>

            <section className='py-2 bg-white border-b'>
                <div className="container max-w-3xl m-8 mx-auto">
                    <h1 className="w-full my-2 text-3xl font-bold leading-tight text-center text-gray-800">En savoir plus</h1>
                    <div className='w-full mb-4'>
                        <div className="w-64 h-1 py-0 mx-auto my-0 rounded-t opacity-25 gradient" />
                    </div>
                    <div className='flex flex-wrap'>
                        <div className='w-5/6 p-6 sm:w-1/2'>
                            <h3 className="mb-3 text-xl font-bold leading-none text-gray-800">
                                Situation Actuelle
                            </h3>
                            <p className="mb-8 text-gray-600">
                                    20% des essais en cancérologie échouent en raison d'un recrutement insuffisant, et
                                    seulement 5% des patients atteints d'un cancer participent à des essais cliniques...
                                <br />
                                <br />
                            </p>
                        </div>
                        <div className="w-full p-6 sm:w-1/2">
                            <img src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1643905855950x644981618768298600%2Fhand-people-equipment-biology-machine-medicine-1192476-pxhere.com%2520%25285%2529.jpg?w=2048&h=918&auto=compress&dpr=1&fit=max" alt='bookings' className='w-full rounded-full mx-auto sm:h-64' />
                        </div>
                    </div>

                    <div className="flex flex-col-reverse flex-wrap sm:flex-row">
                        <div className="w-full p-6 mt-6 sm:w-1/2">
                            <img src={WorldMap} alt='world map' className='w-5/6 mx-auto sm:h-64' />
                        </div>
                        <div className="w-full p-6 mt-6 sm:w-1/2">
                            <div className="align-middle">
                                <h3 className="mb-3 text-xl font-bold leading-none text-gray-800">
                                    Notre solution
                                </h3>
                                <p className="mb-8 text-gray-600">
                                    MyClinic est la plateforme digitale innovante qui offre enfin une recherche intuitive et intelligente des essais cliniques pour les patients et les médecins en oncologie
                                    <br />
                                    <br />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <img className="wave-top" src={BottomWaves} alt='bottom waves' />

            <section className="container py-6 mx-auto mb-12 text-center">
                <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
                    Une question ?
                </h1>
                <div className="w-full mb-4">
                    <div className="w-1/6 h-1 py-0 mx-auto my-0 bg-white rounded-t opacity-25" />
                </div>
                <h3 className="my-4 text-3xl leading-tight">
                    Contact
                </h3>
            </section>
            <Footer />
        </div>
    );
}
