import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { useNavigate, useParams, Link } from 'react-router-dom';

const URI = 'http://localhost:5000/patient/'

const PatientDetails = () => {
    const [patient, setPatient] = useState([]);
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    //const navigate = useNavigate();
    const {id} = useParams();

    useEffect( () => {
        refreshToken();
        getPatientById();
    },[])

//--------------------------------------------- TOKEN --------------------------------------------------------------
    const refreshToken = async () => {
        try {
            const response = await axios.get('http://localhost:5000/token');
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
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
            setExpire(decoded.exp);
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    });

//------------------------------------------------------------------------------------------------------------------

    const getPatientById = async () => {
        const res = await axiosJWT.get(URI+id, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        setPatient(res.data)
        console.log("Datos Paciente: "+res.data)
    }

    return (
        <div className="container">
                    <br/>
                    <h2>DATOS COMPLETOS</h2>
                    <br/>
                    <ul>
                        <li>Identificador: <strong>{patient.id}</strong></li>
                        <li>Nombre completo: <strong>{patient.nombre}</strong></li>
                        <li>Sexo: <strong>{patient.genero}</strong></li>
                        <li>Fecha Nacimiento: <strong>{patient.fecha_nacimiento}</strong></li>
                        <li>Número de teléfono: <strong>{patient.numero_contacto}</strong></li>
                        <li>Email: <strong>{patient.email}</strong></li>
                    </ul>
                    <br/>
                    <h2>RESULTADOS</h2>
                    <br/>
                    <div className="columns">
                        <div className="column">Identificador: <strong>{patient.id}</strong></div>
                        <div className="column">Nombre completo: <strong>{patient.nombre}</strong></div>
                    </div>
                    <div className="columns">
                        <div className="column">Sexo: <strong>{patient.genero}</strong></div>
                        <div className="column">Fecha Nacimiento: <strong>{patient.fecha_nacimiento}</strong></div>
                    </div>
                    <div className="columns">
                        <div className="column">Número de teléfono: <strong>{patient.numero_contacto}</strong></div>
                        <div className="column">Email: <strong>{patient.email}</strong></div>
                    </div>
        </div>
    )
}

export default PatientDetails;