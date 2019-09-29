
const express = require('express')
const app = express()
const port = process.env.PORT || 4000

// the __dirname is the current directory from where the script is running
app.use(express.static(`${__dirname}/dist`))

app.get('/*', (req, res) => res.sendFile(`${__dirname}/dist/index.html`))

app.listen(port, () => console.log(`app is listening on port ${port}`))
