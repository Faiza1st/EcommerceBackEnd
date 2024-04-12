const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
router.get('/', async (req, res) => {
    // find all categories
    try {
      const categories = await Category.findAll({
        include: [{
          model: Product
        }],    
      });
  
      res.status(200).json(categories);
    } catch (err) {
      res.status(500).json({ message:  'categories error'})  
    };
  });

  router.get('/:id', async (req, res) => {
    // find one category by its `id` value
    try {
     const category = await Category.findByPk(req.params.id, { include: [{ model: Product }] });
     if (!category) {
       res.status(404).json({ message: 'category id error' });
       return;
     }
     res.status(200).json(category);
   } catch (err) {
     res.status(500).json({ message: 'category error' });
   }
 });


 router.post('/', async (req, res) => {
    // creating a new category
    try {
      const newCategory = await Category.create(req.body);
      res.status(200).json(newCategory);
    } catch (err) {
      res.status(400).json({ message: 'error in creating New Category' });
    }
  });

  router.put('/:id', async (req, res) => {
    // update a category by its `id` value
    try {
      const update = await Category.update(req.body, { where: { id: req.params.id } });
      !update[0] ? res.status(404).json({ message: 'error updating category' }) : res.status(200).json(update);
    } catch (err) {
      res.status(500).json({ message: 'Updating error' });
    }
  });

  router.delete('/:id', async (req, res) => {
    // delete a category by its `id` value
    try {
      const deleted = await Category.destroy({ where: { id: req.params.id } });
      if (!deleted) {
        res.status(404).json({ message: 'id finding error'});
        return;
      }
  
      res.status(200).json({ message: `Deleted`});
    }  
    catch (err) {
      res.status(500).jso({message: 'id unable to delete error'});
    }
  });

module.exports = router;
