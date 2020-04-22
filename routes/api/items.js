const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');



//Item Model
const Item = require('../../models/Item');

// @route  GET api/items
// @desc   Get All Items
// @access Public
router.get('/', (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items))
});

// @route  POST api/items
// @desc   Create an Item
// @access private
router.post('/', auth, (req, res) => {
  const newItem = new Item({
    name:req.body.name
    //if we had other Item properties from the model they need to be added here too
  });

  newItem.save().then(item => res.json(item));
});



// @route  DELETE api/items/:id
// @desc   Delete an Item
// @access private
router.delete('/:id', auth, (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then( () => res.json({success:true}) ) )
    .catch (err => res.status(404).json({success:false}))
});


module.exports = router;