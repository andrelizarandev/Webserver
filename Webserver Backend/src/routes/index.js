// Modules
const { Router } = require('express');

// Controllers
const { postMomentValues, getParameters } = require('../controllers/index');

const router = Router();

router.get('/', getParameters);
router.post('/', postMomentValues);

module.exports = router;