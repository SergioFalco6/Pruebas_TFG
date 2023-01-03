import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewPatient = () => {
    const [name, setName] = useState('');
    const [genero, setGenero] = useState('');
    const [fechaNacimiento, setFechaNac] = useState('');
    const [email, setEmail] = useState('');
    const [numeroContacto, setNumConta] = useState('');
    const [password, setPassword] = useState('');
    const [profesional, setProfesional] = useState('');
    const [observaciones, setObservaciones] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const newPatient = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/newpatient', {
                name: name,
                genero: genero,
                fehca_nacimiento: fechaNacimiento,
                email: email,
                numero_contacto: numeroContacto,
                password: password,
                confPassword: confPassword,
                profesional: profesional,
                observaciones: observaciones
            });
            navigate("/pacientes");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

    function handleClick() {
        navigate(-1)
    }

    return (
        <section className="hero has-background-grey-light is-fullheight is-fullwidth">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4-desktop">
                            <form onSubmit={newPatient} className="box">
                                <p className="has-text-centered">{msg}</p>
                                <div className="field mt-5">
                                    <label className="label">Nombre Completo</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Género</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="hombre/mujer/otro" value={genero} onChange={(e) => setGenero(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Fecha de Nacimiento</label>
                                    <div className="controls">
                                        <input type="date" className="input" value={fechaNacimiento} onChange={(e) => setFechaNac(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Email</label>
                                    <div className="controls">
                                        <input type="email" className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Número de Contacto</label>
                                    <div className="controls">
                                        <input type="tel" className="input" placeholder="000000000" value={numeroContacto} onChange={(e) => setNumConta(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Contraseña (por defecto: "user123")</label>
                                    <div className="controls">
                                        <input type="password" className="input" placeholder="user123" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Número del Profesional</label>
                                    <div className="controls">
                                        <input type="number" className="input" value={profesional} onChange={(e) => setProfesional(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Observaciones</label>
                                    <div className="controls">
                                        <input type="text" className="input" value={observaciones} onChange={(e) => setObservaciones(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <button className="button is-primary is-fullwidth is-outlined">Guardar</button>
                                </div>
                                <div className="field mt-5">
                                    <button className="button is-danger is-fullwidth is-outlined" onClick={handleClick}>Salir</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewPatient;