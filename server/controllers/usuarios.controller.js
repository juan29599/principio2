const db = require('../config/dataBase');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const { resolveContent } = require('nodemailer/lib/shared');
module.exports.obtenerUsuarios= async(req,res) => {
    try {
        let usuarios=await db.usuarios.findAll();
        if(usuarios){
            return res.json(usuarios);
        }else{
            return res.json({mensaje:'no existen datos'});
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

module.exports.guardarUsuarios=async(req,res) => {
    try {
        req.body.password=bcrypt.hashSync(req.body.password,10);
        await db.usuarios.create(req.body);
        return res.json({mensaje:'usuario agregado satisfactoriamente'});
    } catch (error) {
        res.status(400).json(error); 
    }
}
module.exports.modificarUsuarios = async(req,res) => {
    try {
       await db.usuarios.update({nombre: req.body.nombre,email: req.body.email},{
           where:{
               id: req.params.id
           }
       }); 
       return res.json({mensaje:'usuario actualizado satisfactoriamente'})
    } catch (error) {
        res.status(400).json(error);
    }
}
module.exports.eliminarUsuarios = async(req,res) => {
    try {
        await db.usuarios.destroy({
            where:{
                id: req.params.id
            }
        })
        res.json({
            mensaje: "okey"
        })
    } catch (error) {
        res.json({
            mensaje: error
        })
    }
}
module.exports.enviarEmail = async(req,res) => {

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: "juanzuniga29599@gmail.com",
            pass: "xxxxxxxxxxx0",
        },
    });
    let info = await transporter.sendMail({
        from: '"juan" <juanzuniga29599@gmail.com>',
        to: "tuanitoelgamer@gmail.com",
        subject: "hello desde nodemailer",
        text: "hello word",
        html: "<b>hello word</b>",
    });
    console.log("message sent: juanzuniga29599@gmail.com", info.messageId);

    console.log("preview URL:juanzuniga29599@gmail.com", nodemailer.getTestMessageUrl(info));
}