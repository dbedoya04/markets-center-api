import { Router } from "express";
const productController = require("../controllers/products/product.controllers");
const userController = require('../controllers/users/users.controllers')

const router = Router();

//products

router.put('/product/:id', productController.update);
router.post('/product', productController.add);

//users
router.post('/users/add', userController.add);
router.get('/users', userController.getAll);
router.get('/users/sellers', userController.sellers);
router.put('/users/update', userController.update);

module.exports = router;
