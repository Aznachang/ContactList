module.exports = (app) => {
  app.get('/', (req,res) => {
    res.send('index.html');
  });

  app.get('/#/contacts', (req, res) => {

  });
}