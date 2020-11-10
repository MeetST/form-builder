import mongoose from 'mongoose'
let ObjectId = mongoose.Schema.Types.ObjectId;
const connection = require('../db/connection')
const Schema = mongoose.Schema

var schema = new Schema({
    user_id: {
        type: ObjectId,
        ref: 'tbl_users',
    },
    form_name: {
        type: String
    },
    form_desc: {
        type: String
    },
    url_short_code: {
        type: String
    },
    elements: [{
        element_type: {
            type: String
        },
        options: [{
            optionValue: {
                type: String
            }
        }],
        lable: {
            type: String
        }
    }],
    updated_at: {
        type: Date,
        default: new Date()
    },
    created_at: {
        type: Date,
        default: new Date()
    }
}, {
    collection: 'tbl_forms'
})

schema.pre('save', function (next) {
    let url = this
    url.created_at = url.updated_at = new Date()
    next()
})

schema.pre('update', function (next) {
    let url = this
    url.updated_at = new Date()
    next()
})

module.exports = connection.model(schema.options.collection, schema)