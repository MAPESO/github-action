module.exports = (req, res) => {
  res.status(200);
  res.send(`<heade>
     <h1>Test GitHub Actions</h1>
     <p>
       Este PR deberia hacer deploy con ▲Now
     </p>
  </header>`);
};
