/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { useNavigate, useParams, Link } from 'react-router-dom';
import { HiCalendar } from "react-icons/hi";

const URI = 'http://localhost:5000/profesional/';

const Dashboard = () => {
    const [id, setId] = useState('')
    const [name, setName] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    //const [profesional, setProfesional] = useState([]);
    const [patients, setPatients] = useState([]);
    const navigate = useNavigate();
    //const {id} = useParams()
    const [email, setEmail] = useState('');

    useEffect(() => {
        refreshToken();
        //getProfesional();
        getPatients();
    }, []);

//--------------------------------------------- TOKEN --------------------------------------------------------------

    const refreshToken = async () => {
        try {
            const response = await axios.get('http://localhost:5000/token');
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setId(decoded.userId);
            setEmail(decoded.email);
            setExpire(decoded.exp);
        } catch (error) {
            if (error.response) {
                navigate("/");
            }
        }
    }

    const axiosJWT = axios.create();

    axiosJWT.interceptors.request.use(async (config) => {
        const currentDate = new Date();
        if (expire * 1000 < currentDate.getTime()) {
            const response = await axios.get('http://localhost:5000/token');
            config.headers.Authorization = `Bearer ${response.data.accessToken}`;
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setId(decoded.userId);
            setEmail(decoded.email);
            setExpire(decoded.exp);
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    });

//------------------------------------------------------------------------------------------------------------------

    const getPatients = async () => {
        const response = await axiosJWT.get(URI + 2 +'/patients', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        setPatients(response.data);
    }

    console.log('La id del profesional: '+id);

    return (
        <div className="container mt-5">
            <h1>Bienvenido: {name}</h1>
            {/* <button onClick={getPacientes} className="button is-info">Pacientes</button> */}
            <table className="table is-striped is-fullwidth" id='tabla-1'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{email}</td>
                    </tr>
                </tbody>
            </table>
            {/* <table className="table is-striped is-fullwidth" id='tabla-2'>
                <thead>
                    <tr>
                        <th>Id_Paciente</th>
                        <th>Nombre Completo</th>
                        <th>Email</th>
                        <th>Observaciones</th>
                    </tr>
                </thead>
                <tbody>
                    {patients.map((patient, index) => (
                        <tr key={patient.id}>
                            <td>{index + 1}</td>
                            <td>{patient.nombre}</td>
                            <td>{patient.email}</td>
                            <td>{patient.observaciones}</td>
                        </tr>
                    ))}
                </tbody>
            </table> */}
            <Link to={'/newpatient'}>
                <button className="button is-medium is-responsive is-link is-light">Añadir Paciente</button>               
            </Link>
            <h1>Lista de pacientes:</h1>
            <br/>
            {patients.length === 0 ? (
                <div>Loading...</div>
            ) : (
                <section>
                    {patients.map((patient) => (
                        <div className="patient-preview" key={patient.id}>
                            <div className="box mb-2 has-background-light">
                                <article className="media">
                                    <div className="media-content">
                                        <div className="content">
                                            <p>
                                                Identificador: <strong>{patient.id}</strong> &nbsp;&nbsp;&nbsp; Nombre: <strong>{patient.nombre}</strong>
                                            </p>
                                        </div>
                                        <nav className="level is-mobile">
                                            <div className="level-left">
                                            <div className="level-item" aria-label="reply">
                                                <span className="icon-text">
                                                    <span className="icon">{HiCalendar}</span>
                                                    <span><small>{patient.fecha_nacimiento}</small></span>
                                                </span>
                                            </div>
                                            </div>
                                        </nav>
                                        <Link to={'/details/'+patient.id}>
                                            <button className="button is-primary is-outlined is-rounded">Detalles</button>
                                        </Link>
                                    </div>
                                </article>
                            </div>
                        </div>
                    ))}
                </section>
            )}
        </div>
    )
}

export default Dashboard;
