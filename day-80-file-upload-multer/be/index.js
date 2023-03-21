console.log('Day 80 file upload multer')

const express = require('express')
const cors = require('cors')
const multer = require('multer')
const fs = require('fs')
const { request, response } = require('express')


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})


const app = express()
const PORT = 8080
const upload = multer({ storage: storage })
app.use('/uploads', express.static("uploads"))


app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send(
        '<h1>Hello Day-80 Filupload Multer </h1>'
    )
})

app.get('/files', async (req, res) => {
    const testFolder = './uploads'
    const imgs = [];

    fs.readdirSync(testFolder).forEach((file) => {
        console.log(file);
        const imgURL = `http://localhost:8080/uploads/${file}`;
        imgs.push(imgURL)
    })

    response.status(200).json({
        data: imgs,
    })
})

app.post('/fileUpload', upload.single("image"), (request, response, next) => {

    // console.log(request.file)
    const imgs = [];

    fs.readdirSync('./uploads').forEach(file => {
        console.log(file)
        const fileUrl = `http://localhost:8080/uploads/${file}`
        imgs.push(fileUrl)
    })

    response.json({
        data: imgs
    })

})

app.listen(PORT, () => {
    console.log(`Express application is running http://localhost:${PORT}`)
})