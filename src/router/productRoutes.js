productsRouter.get('/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find((p) => p.id === productId);
  
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ error: 'El producto no existe' });
    }
  });
  // Agregar un producto sin necesidad de proporcionar el id en la URL
  // pruebas con postman
  productsRouter.post('/', (req, res) => {
    const { title, description, price, thumbnail, code, size, stock } = req.body;
    const newProduct = {
      title,
      description,
      price,
      thumbnail,
      code,
      size,
      stock,
    };
  
    if (this.Products.length === 0) {
      newProduct.id = 1;
    } else {
      newProduct.id = this.Products[this.Products.length - 1].id +1;
    }
  
    products.push(newProduct);
    res.status(201).json(newProduct);
  });
  
  // Actualizar un producto
  productsRouter.put('/update/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const updatedProduct = req.body;
  
    const productIndex = products.findIndex((p) => p.id === productId);
  
    if (productIndex !== -1) {
      products[productIndex] = { ...products[productIndex], ...updatedProduct };
      res.json(products[productIndex]);
    } else {
      res.status(404).json({ error: 'Producto no encontrado por el ID especificado' });
    }
  });
  
  // Eliminar un producto
  productsRouter.DELETE('/delete/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const productIndex = products.findIndex((p) => p.id === productId);
  
    if (productIndex !== -1) {
      products.splice(productIndex, 1);
      res.json({ message: 'Producto eliminado' });
    } else {
      res.status(404).json({ error: 'Producto no encontrado por el ID especificado' });
    }
  });
  
  export default productsRouter;