const { Router } = require('express');

const Product = require('../models/Product');

const router = Router();

router.get('/', async (req, res) => {
  const products = await Product.getAll();
  res.status(200).json(products);
});


module.exports = router;