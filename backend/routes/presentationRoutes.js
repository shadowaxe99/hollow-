```javascript
const express = require('express');
const router = express.Router();
const presentationController = require('../controllers/presentationController');

router.get('/presentation', presentationController.getPresentation);
router.post('/presentation', presentationController.createPresentation);
router.put('/presentation/:id', presentationController.updatePresentation);
router.delete('/presentation/:id', presentationController.deletePresentation);

module.exports = router;
```