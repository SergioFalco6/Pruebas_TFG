import express from "express";
import { Register, Login, Logout, getProfesional, getAllProfesionals, getPatients, getPatientById, newPatient } from "../controllers/Profesionals.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";

const router = express.Router();

/* Métodos de la API REST */

router.get('/profesional/:id', verifyToken, getProfesional);
router.get('/profesional', verifyToken, getAllProfesionals);
router.get('/profesional/:id/patients', verifyToken, getPatients);
router.post('/profesional', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);
router.get('/patient/:id', verifyToken, getPatientById);
router.post('/newpatient', verifyToken, newPatient);


export default router;