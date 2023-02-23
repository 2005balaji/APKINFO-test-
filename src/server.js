const express = require('express');
const multer = require('multer');
const app = express();

const port = 3001; // or any port you prefer




const upload = multer({ dest: 'upload/' }); // specify the directory where uploaded files will be stored
app.post('/upload', upload.single('file'), (req, res) => {
  console.log('File uploaded successfully!');
  // sace data to db
  // fs rm
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
