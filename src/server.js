const express = require('express');
const multer = require('multer');
const cors = require('cors');
const upload = multer({dest: __dirname + '/uploads/images'});

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.static('public'));

app.post('/upload', upload.single('photo'), (req, res) => {
    try{
        if(req.file) {
            console.log('uploaded');
            res.json(req.file.path);
        }else{
            res.status('400').send('must be file')
        }
    }catch(e){
        console.log(e);
    }
    
});

app.listen(PORT, () => {
    console.log('Listening at ' + PORT );
});