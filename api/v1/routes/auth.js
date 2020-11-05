import express from 'express'
const router = express.Router()
import FormController from '../controllers/form'

router.post('/api/form/add', FormController.addForm);
router.get('/api/form/list', FormController.getAllForms);

// exports router
module.exports = router