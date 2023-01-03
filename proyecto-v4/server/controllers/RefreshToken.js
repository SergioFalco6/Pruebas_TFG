import jwt from "jsonwebtoken";
import Profesionals from "../models/ProfesionalModel.js";

export const refreshToken = async(req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;
        if(!refreshToken) return res.sendStatus(401);
        const profesional = await Profesionals.findAll({
            where:{
                refresh_token: refreshToken
            }
        });
        if(!profesional[0]) return res.sendStatus(403);
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
            if(err) return res.sendStatus(403);
            const userId = profesional[0].id;
            const name = profesional[0].nombre;
            const email = profesional[0].email;
            const accessToken = jwt.sign({userId, name, email}, process.env.ACCESS_TOKEN_SECRET,{
                expiresIn: '15s'
            });
            res.json({ accessToken });
        });
    } catch (error) {
        console.log(error);
    }
}