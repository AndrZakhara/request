const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
const path = require('path');
const fs = require('fs');

app.use('/form', express.static(path.join(__dirname, '/index.html')));
app.use('/style.css', express.static(path.join(__dirname, '/style.css')));
app.use('/bundle.js', express.static(path.join(__dirname, '/dist/bundle.js')));
// app.use('/progress.js', express.static(path.join(__dirname, '/src/progress.js')));
// app.use('/HttpRequest.js', express.static(path.join(__dirname, '/src/HttpRequest.js')));
app.use('/files', express.static(path.join(__dirname, '/uploads')));

// default options
app.use(fileUpload());

app.get('/ping', function(req, res) {
  res.send('get pong');
  // setTimeout(() => {
  //   res.send('pong');
  // }, 2000);
});

app.post('/ping', function(req, res) {
  res.send('post pong');
  // setTimeout(() => {
  //   res.send('pong');
  // }, 2000);
});

app.post('/upload', function(req, res) {
  if (Object.keys(req.files).length === 0) {
    res.status(400).send('No files were uploaded.');
    return;
  }

  console.log('req.files >>>', req.files); // eslint-disable-line

  const { sampleFile } = req.files;

  const uploadPath = path.join(__dirname, '/uploads/', sampleFile.name);

  sampleFile.mv(uploadPath, function(err) {
    if (err) {
      return res.status(500).send(err);
    }

    res.send(path.join('File uploaded to ', uploadPath));
  });
});


app.get('/list', function(req, res) {
  const listPath = path.join(__dirname, '/uploads');

  fs.readdir(listPath, (err, files) => {
    if (err) {
      return res.status(500).send(err);
    }

    res.send(files);
  });
});


app.listen(8000, function() {
  console.log('Express server listening on port 8000'); // eslint-disable-line
});