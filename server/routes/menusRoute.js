const express = require('express');
const router = express.Router();
const menusController = require('../controllers/menusController');

/* GET quotes listing. */
//router.get('/', menusController.getAllMenus);
router.post('/add', menusController.addMenu)
router.delete('/delete/:id', menusController.deleteMenu)

module.exports = router;