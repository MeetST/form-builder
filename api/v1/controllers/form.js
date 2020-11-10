var TinyURL = require('tinyurl');
const Form = require('../models/form');
const Message = require('../../../config/message')

let _self = {
    getAllForms: (req, res) => {
        let returnResp;
        Form
            .find()
            .sort({_id: -1})
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

    getFormByShortCode: (req, res) => {
        let returnResp;
        Form
            .findOne({
                url_short_code: req.query.url_short_code
            })
            .then((form) => {
                returnResp = {
                    message: Message.COMMON_SUCCESS,
                    data: form
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
        console.log("req.body", req.body)
        let shortCode = Math.random().toString(36).substr(2, 10);
        let newForm = new Form({
            form_name: req.body.form_name,
            form_desc: req.body.form_desc,
            elements: req.body.elements,
            url_short_code: shortCode
        });
        TinyURL.shorten(`http://localhost:5200/fill-survey/${shortCode}`, function (shortUrl, err) {
            if (err) {
                returnResp = {
                    message: Message.COMMON_ERROR,
                    data: {}
                }
                res.status(400).send(returnResp)
            } else {
                console.log(shortUrl);
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
                            data: {
                                url: shortUrl
                            }
                        }
                        res.status(200).send(returnResp)
                    }
                });
            }
        });
    }
}

module.exports = _self;