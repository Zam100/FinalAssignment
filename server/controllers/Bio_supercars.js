var express = require('express');
var router = express.Router();
//const { router } = require('../config/app');
let Supercar = require('../models/Bio_supercars');

module.exports.DislaySupercarlist = async (req,res,next)=>{ //< Mark function as async
    try{
       const SupercarList = await Supercar.find(); //< Use of await keyword
       res.render('supercarslist', {
          title: 'supercarslist', 
          SupercarList: SupercarList
       });
    }catch(err){
       console.error(err);
       //Handle error
       res.render('supercarslist', {
          error: 'Error on server'
       });
    }
 };

 module.exports.AddSupercar = async (req,res,next)=>{
    try{
        res.render('supercar/add',
        {
            title:'Add Supercar'
        })
    }
    catch(err)
    {
        console.error(err);
        res.render('supercarslist',
        {
            error: 'Error on the server'
        });
    }
};

module.exports.ProcessSupercar = async (req,res,next)=>{
    try{
        let newSupercar = Supercar({
            "Brand":req.body.Brand,
            "Model": req.body.Model,
            "Power": req.body.Power,
            "Acceleration0-60": req.body.Acceleration,
            "Topspeed": req.body.Topspeed,
            "Price": req.body.Price
        });
        Supercar.create(newSupercar).then(() =>{
            res.redirect('/supercarslist')
        })
    }
    catch(error){
        console.error(err);
        res.render('supercarslist',
        {
            error: 'Error on the server'
        });
    }
};

module.exports.EditSupercar = async (req,res,next)=>{
    try{
    const id = req.params.id;
    const supercarToEdit = await Supercar.findById(id);
    res.render('supercarsedit',
    {
        title:'Edit Supercar',
        Supercar:supercarToEdit
    })
}
catch(error){
    console.error(err);
    res.render('supercarslist',
    {
        error: 'Error on the server'
    });
}
}

module.exports.ProcessEditSupercar = (req,res,next)=>{
    try{
        const id = req.params.id;
        let updatedSupercar = Supercar({
            "_id":id,
            "Brand":req.body.Brand,
            "Model": req.body.Model,
            "Power": req.body.Power,
            "Topspeed": req.body.Topspeed,
            "Price": req.body.Price
        });
        Supercar.findByIdAndUpdate(id,updatedSupercar).then(()=>{
            res.redirect('/supercarslist')
        });
    }
    catch(error){
        console.error(err);
        res.render('supercar/list',
        {
            error: 'Error on the server'
        });
    }
}

module.exports.DeleteSupercar = (req,res,next)=>{
    try{
        let id = req.params.id;
        Supercar.deleteOne({_id:id}).then(() =>
        {
            res.redirect('/supercarslist')
        })
    }
    catch(error){
        console.error(err);
        res.render('supercar/list',
        {
            error: 'Error on the server'
        });
    }
}