const path = require('path');

module.exports = {
  getIndex: (req, res) => {
    res.render("index.ejs");
  },
  getAbout: (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'about.html'));
  }, 
  getContact: (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'contact.html'))
  }
 };
