const router = require('express').Router();
const Product = require('../models/Product');

// find all products 
router.get('/' , async  (req, res) => {
   
    const products = await Product.findAll(); 
    
    return res.status(200).json(products);

})

// add a new Product 
router.post('/addProduct' , (req, res) => {
   
    if(req.body.name != null && req.body.price != null)
    {
        const { name , price } = req.body ;
        Product.create({name, price}).then(product => {
            return res.status(201).json(product); 
        })
    }else {
        return res.status(409).json({message: 'bad request'});
    }


   
   

});



// edit a product
router.put('/edit/:id' , async( req, res) => {
    
    const id = req.params.id ; 
    const product = await Product.findOne({
        where: { 'id' : id }
    }); 

    if(product) { 
        const { name , price } = req.body ; 
       
        product.update({
            name , price
        }).then(product => 
            {
                return res.status(200).json({message: 'updated', product: product})
             } ) ; 
    }else {
        return res.status(500).json({message: 'internal server error, product not found'});
    }
})

//delete a product 
router.delete('/delete/:id' , async(req, res) => {
   
    const id = req.params.id ; 
    
    Product.destroy({
        where :{'id' : id }
    }).then(() =>{
        return res.status(200).json({message: 'deleted'});
    });

})



module.exports = router; 