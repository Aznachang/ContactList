module.exports = (app, Contact) => {
  app.get('/', (req,res) => {
    res.send('index.html');
  });

  app.get('/#/contacts', (req, res) => {
    res.render('../home/contacts.html');
  });

  app.get('/api/contacts', (req, res) => {
    Contact.getContacts( (err, contacts) => {
      if (err) console.log(err);
      res.json(contacts);
    });
  });

  /** Passport routes **/
  // route for logging out
  app.get('/logout', (req, res) => {
    req.logout();
    // go to root url - login page
    res.redirect('/');
  });

  // send to google to do the authentication
  // profile gets us their basic information including their name
  // email gets their emails
  app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  }));
  // the callback after google has authenticated the user
  app.get('/auth/google/callback',
    passport.authenticate('google', {
      successRedirect: '/#/home',
      f

  // route middleware to make sure a user is logged in
  const isLoggedIn = (req, res, next) => {
    // if user is authenticated in the session, carry on
    if (req.isAuthenticated()) return next();
    // if they aren't redirect them to the home page
    res.redirect('/');
  };

}