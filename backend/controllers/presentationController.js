```javascript
const Presentation = require('../models/Presentation');

// Get all presentations
const getPresentations = async (req, res) => {
    try {
        const presentations = await Presentation.find();
        res.json(presentations);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get one presentation
const getPresentation = async (req, res) => {
    try {
        const presentation = await Presentation.findById(req.params.id);
        if (presentation == null) {
            return res.status(404).json({ message: 'Cannot find presentation' });
        }
        res.json(presentation);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

// Create one presentation
const createPresentation = async (req, res) => {
    const presentation = new Presentation({
        title: req.body.title,
        content: req.body.content,
        visualAids: req.body.visualAids,
        questions: req.body.questions,
        appearance: req.body.appearance
    });
    try {
        const newPresentation = await presentation.save();
        res.status(201).json(newPresentation);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update one presentation
const updatePresentation = async (req, res) => {
    try {
        const presentation = await Presentation.findById(req.params.id);
        if (presentation == null) {
            return res.status(404).json({ message: 'Cannot find presentation' });
        }

        if (req.body.title != null) {
            presentation.title = req.body.title;
        }
        if (req.body.content != null) {
            presentation.content = req.body.content;
        }
        if (req.body.visualAids != null) {
            presentation.visualAids = req.body.visualAids;
        }
        if (req.body.questions != null) {
            presentation.questions = req.body.questions;
        }
        if (req.body.appearance != null) {
            presentation.appearance = req.body.appearance;
        }

        const updatedPresentation = await presentation.save();
        res.json(updatedPresentation);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

// Delete one presentation
const deletePresentation = async (req, res) => {
    try {
        const presentation = await Presentation.findById(req.params.id);
        if (presentation == null) {
            return res.status(404).json({ message: 'Cannot find presentation' });
        }
        await presentation.remove();
        res.json({ message: 'Deleted Presentation' });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getPresentations,
    getPresentation,
    createPresentation,
    updatePresentation,
    deletePresentation
};
```