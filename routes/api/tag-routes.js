const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
    // find all tags
    try {
      const allTagData = await Tag.findAll({
        include: [{ model: Product }],
      });
      res.status(200).json(allTagData);
    } catch (err) {
      res.status(500).json({ message: "error finding tagged Data" });
    }
  });
  
  // get a tag by ID
  router.get("/:id", async (req, res) => {
    // find a single tag by its `id`
    try {
      const tag = await Tag.findByPk(req.params.id, {
        include: [{ model: Product }],
      });
      if (!tag) {
        res.status(404).json({ message: "error finding tag id" });
        return;
      }
      res.status(200).json(tag);
    } catch (err) {
      res.status(500).json({ message: "error" });
    }
  });
  
  router.post("/", async (req, res) => {
    // create a new tag
    try {
      const NewtagData = await Tag.create(req.body);
      res.status(200).json(NewtagData);
    } catch (err) {
      res.status(400).json({ message: "error with NewtagData" });
    }
  });
  
  router.put("/:id", async (req, res) => {
    // update a tag's name by its `id` value
    try {
      const updatedTag = await Tag.update(req.body, {
        where: { id: req.params.id },
      });
      !updatedTag[0]
        ? res.status(404).json({ message: "error updating tag" })
        : res.status(200).json(updatedTag);
    } catch (err) {
      res.status(500).json({ message: "error" });
    }
  });
  
  router.delete("/:id", async (req, res) => {
    // delete on tag by its `id` value
    try {
      const deletedTag = await Tag.destroy({ where: { id: req.params.id } });
      !deletedTag
        ? res.status(404).json({ message: "error" })
        : res.status(200).json(deletedTag);
    } catch (err) {
      res.status(500).json({ message: "error" });
    }
  });
  
  module.exports = router;