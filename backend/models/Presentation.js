```javascript
const mongoose = require('mongoose');

const PresentationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  hologram: {
    type: String,
    required: true,
  },
  speech: {
    type: String,
    required: true,
  },
  visualAids: {
    type: [String],
    required: true,
  },
  questions: {
    type: [String],
    required: true,
  },
  answers: {
    type: [String],
    required: true,
  },
  appearance: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Presentation', PresentationSchema);
```