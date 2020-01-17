const ProductController = require('../controllers/product.controller');

module.exports = function(app){
    app.post('/api/product/new', ProductController.createProduct);
    app.get('/api/product/all', ProductController.findAllProducts);
    app.get('/api/product/:id', ProductController.findOneProduct);
    app.put('/api/product/:id/update', ProductController.updateProduct);
    app.delete('/api/product/:id/delete', ProductController.deleteProduct);
}