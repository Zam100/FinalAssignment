var express = require('express');
var router = express.Router();
//const { router } = require('../config/app');
let Supercar = require('../models/Bio_supercars');
let SupercarController = require('../controllers/Bio_supercars')
/* Get route for the Bio Supercars list */
// Read Operation
router.get('/', SupercarController.DislaySupercarlist);
/* Get route for Add Supercar page --> Create */
router.get('/add', SupercarController.AddSupercar); 
/* Post route for Add Supercar page --> Create */
router.post('/add', SupercarController.ProcessSupercar);
/* Get route for displaying the Edit upercar page --> Update */
router.get('/edit/:id', SupercarController.EditSupercar);
/* Post route for processing the Edit Supercar page --> Update */
router.post('/edit/:id', SupercarController.ProcessEditSupercar);
/* Get to perform Delete Operation --> Delete Operation */
router.get('/delete/:id', SupercarController.DeleteSupercar);
 module.exports = router;