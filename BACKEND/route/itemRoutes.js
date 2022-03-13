const express =require('express')
const router = express.Router()
const {getAllItems,getItemById} = require('../controller/ItemsControllers')

router.get('/items',getAllItems)

router.get('/item/:id',getItemById)

module.exports = router;