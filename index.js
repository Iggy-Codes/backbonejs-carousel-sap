const fs = require('fs')
const path = require('path')

const thereIsDotEnv = fs.existsSync('.env')
if (thereIsDotEnv) require('dotenv').config()

global.__base = path.join(__dirname, '/server/')

const app = require('./server/app')

const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`))
