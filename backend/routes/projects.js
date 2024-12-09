// routes/projects.js
const express = require('express');
const router = express.Router();
const db = require('../db');  // We'll create this next

// GET all projects
router.get('/', async (req, res) => {
  try {
    const projects = await db('projects').select('*');
    res.json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET single project by ID
router.get('/:id', async (req, res) => {
  try {
    const project = await db('projects').where({ id: req.params.id }).first();
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }
    res.json(project);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST new project
router.post('/', async (req, res) => {
  try {
    const { name, address } = req.body;
    if (!name) {
      return res.status(400).json({ error: 'Name is required' });
    }
    
    const [newProject] = await db('projects')
      .insert({ name, address })
      .returning('*');
    
    res.status(201).json(newProject);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT update project
router.put('/:id', async (req, res) => {
  try {
    const { name, address } = req.body;
    if (!name) {
      return res.status(400).json({ error: 'Name is required' });
    }

    const [updatedProject] = await db('projects')
      .where({ id: req.params.id })
      .update({ 
        name, 
        address,
        updated_at: db.fn.now()
      })
      .returning('*');

    if (!updatedProject) {
      return res.status(404).json({ error: 'Project not found' });
    }

    res.json(updatedProject);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE project
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await db('projects')
      .where({ id: req.params.id })
      .delete();
    
    if (!deleted) {
      return res.status(404).json({ error: 'Project not found' });
    }

    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
