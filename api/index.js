module.exports = (req, res) => {
  res.status(200);
  res.send(`<heade>
     <h1>Test GitHub Actions</h1>
     <p>
      Si vez este PR significa 2 cosas:
     </p>
     <ol>
       <li>Build salio bien</li>
       <li>Test salio bien</li>
       <li>Deploy salio biien</li>
     </ol>
  </header>`);
};
