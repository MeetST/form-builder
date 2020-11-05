const Form = require('../models/form');
const Message = require('../../../config/message')

let _self = {
    getAllForms: (req, res) => {
        let returnResp;
        Form
            .find()
            .then((formList) => {
                returnResp = {
                    message: Message.COMMON_SUCCESS,
                    data: {
                        list: formList
                    }
                }
                res.status(200).send(returnResp)
            }).catch((err) => {
                returnResp = {
                    message: Message.COMMON_ERROR,
                    data: {}
                }
                res.status(400).send(returnResp)
            })
    },

    addForm: async (req, res) => {
        let returnResp;
        let newForm = new Form({
            elements: req.body.elements
        });
        newForm.save((err, result) => {
            if (err) {
                console.log("err", err)
                returnResp = {
                    message: Message.COMMON_ERROR,
                    data: {}
                }
                res.status(400).send(returnResp)
            } else {
                returnResp = {
                    message: Message.FORM_CREATED,
                    data: {}
                }
                // response.setHeader('Content-Type', 'application/json')
                res.setHeader('Access-Control-Allow-Origin', '*')
                res.header('Access-Control-Allow-Headers', "Content-Type");
                res.status(200).send(returnResp)
            }
        });
    }
}

module.exports = _self;