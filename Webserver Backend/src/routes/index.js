// Modules
const { Router } = require('express');

// Controllers
const { postMomentValues } = require('../controllers/index');

const router = Router();

router.post('/', postMomentValues);

module.exports = router;