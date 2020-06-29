const express = require('express');
const router = express.Router();

//Item model

const Item = require('../../models/Item');

// @route GET api/cars
// @desc get All items
// @access Public

router.get('/', (req, res) => {
    Item.find()
    .sort({date: -1 })
    .then(items => res.json(items))
    
});

// @route POST api/cars
// @desc Create a item
// @access Public

router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name,
        date: req.body.date
           });

    newItem.save().then(item => res.json(item));

});

// @route DELETE api/cars
// @desc DELETE a item
// @access Public

router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({successs: true})))
    .catch(err => res.status(404).json({successs: flase}));
 });

 // @route PUT api/cars
 // @desc PUT an item
 // @access Public

 router.put('/:id', (req, res) => {

    var newObject = {
        name: req.body.name,
    };

     Item.findByIdAndUpdate(req.params.id, newObject, function(err){
         if(err) {res.send(err);}
         res.json({message:'Done'});
     });


 })
           

    




module.exports = router;