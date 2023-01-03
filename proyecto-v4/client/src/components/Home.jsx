import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { useNavigate, useParams } from 'react-router-dom';

const Home = () => {
    //const [id, setId] = useState('');
    //const [name, setName] = useState('');
    //const [token, setToken] = useState('');
    //const [expire, setExpire] = useState('');
    //const [patient, setPatient] = useState('');
    const navigate = useNavigate();

    // useEffect(() => {
    //     refreshToken();
    //     getPatientById();
    // });

//--------------------------------------------- TOKEN --------------------------------------------------------------

    // const refreshToken = async () => {
    //     try {
    //         const response = await axios.get('http://localhost:5000/token');
    //         setToken(response.data.accessToken);
    //         const decoded = jwt_decode(response.data.accessToken);
    //         setName(decoded.name);
    //         setId(decoded.userId);
    //         setExpire(decoded.exp);
    //     } catch (error) {
    //         if (error.response) {
    //             navigate("/");
    //         }
    //     }
    // }

    // const axiosJWT = axios.create();

    // axiosJWT.interceptors.request.use(async (config) => {
    //     const currentDate = new Date();
    //     if (expire * 1000 < currentDate.getTime()) {
    //         const response = await axios.get('http://localhost:5000/token');
    //         config.headers.Authorization = `Bearer ${response.data.accessToken}`;
    //         setToken(response.data.accessToken);
    //         const decoded = jwt_decode(response.data.accessToken);
    //         setName(decoded.name);
    //         setId(decoded.userId);
    //         setExpire(decoded.exp);
    //     }
    //     return config;
    // }, (error) => {
    //     return Promise.reject(error);
    // });

//------------------------------------------------------------------------------------------------------------------

    function survey() {
        navigate("/survey")
    }

    function instructions() {
        navigate("/instructions")
    }

    function results() {
        navigate("/results")
    }

    return (
        <div className="container mt-5">
            <section>
                <div className="columns">
                    <div className="column">
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-4by3">
                                <img src="public/hacer-cuestionario.svg" alt="Placeholder image"/>
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-content">
                                        <p className="title is-4">EVALUACIÓN</p>
                                    </div>
                                </div>
                                <div className="content">
                                    Realizar unos cuestionarios sobre el Estilo de Vida Mediterráneo.
                                <br/>
                                <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                                </div>
                                <div className="field mt-5">
                                    <button className="button is-link is-fullwidth" onClick={survey}>Realizar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-4by3">
                                <img src="public/img-resultados.svg" alt="Placeholder image"/>
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-content">
                                        <p className="title is-4">RESULTADOS</p>
                                    </div>
                                </div>
                                <div className="content">
                                    Resultados de los diferentes factores obtenidos de los cuestionarios realizados sobre el EVM.
                                <br/>
                                <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                                </div>
                                <div className="field mt-5">
                                    <button className="button is-primary is-fullwidth" onClick={results}>Comprobar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-4by3">
                                <img src="public/vida-saludable.svg" alt="Placeholder image"/>
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-content">
                                        <p className="title is-4">RECOMENDACIONES</p>
                                    </div>
                                </div>
                                <div className="content">
                                    Recomendaciones sobre como mejorar los hábtios de vida saludables, según sus resultados.
                                <br/>
                                <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                                </div>
                                <div className="field mt-5">
                                    <button className="button is-success is-fullwidth" onClick={instructions}>Examinar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;