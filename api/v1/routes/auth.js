import express from 'express'
const router = express.Router()
import FormController from '../controllers/form'

router.post('/api/form/add', FormController.addForm);
router.get('/api/form/list', FormController.getAllForms);
router.get('/api/form/by_short_code', FormController.getFormByShortCode);

// exports router
module.exports = router