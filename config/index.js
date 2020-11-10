import dotenv from 'dotenv'
dotenv.config()

module.exports = {
  'PROJECT_NAME': 'form_builder',
  'PORT': 4200,
  'appHost': 'http://localhost:4200',
  'apiHost': 'http://localhost:4200/v1',

  'database': {
    'mongoURL': 'mongodb://localhost/',
    'use': 'mongodb'
  },

  'GOOGLE_CLIENT_ID': process.env.GOOGLE_CLIENT_ID || '',
  'GOOGLE_CLIENT_SECRET': process.env.GOOGLE_CLIENT_SECRET || '',
  'SESSION_SECRET_TOKEN': process.env.SESSION_SECRET_TOKEN || ''

}
