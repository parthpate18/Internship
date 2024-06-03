const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.write('<h1>Welcome to My Home page</h1>');
  res.write('<p>This is a paragraph</p>');
  res.send();
});


app.get('/about', (req, res) => {
    res.status(200).send('Welcome to My about page');
  });

  
app.get('/contact', (req, res) => {
    res.send('Welcome to My contact page');
  });

  app.get('/temp', (req, res) => {
    res.json([{
        id: 1,
        name: 'John Doe',
        age: 25
        
    }] );
  });

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});