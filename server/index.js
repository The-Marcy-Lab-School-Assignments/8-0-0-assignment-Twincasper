const express = require('express');
const app = express();

const serveHomePage = (req, res) => {
  res.send('<h1>Wrestling stuff here!</h1><p>Explore the exciting world of wrestling!</p>');
};

const serveFavorites = (req, res) => {
  res.send('<h1>My Favorite Wrestlers</h1><ol><li>AJ Styles</li><li>Eddie Guerrero</li><li>Ricky Steamboat</li><li>Shawn Michaels</li><li>John Cena</li></ol>');
};

const serveChampionsData = (req, res) => {
  const champions = [{ name: 'John Cena', title: 'WWE Champion' }, { name: 'Ricky Steamboat', title: 'Intercontinental Champion' }];
  res.send(champions);
};

const serveWrestlerData = (req, res) => {
  const wrestlerName = req.query.name || 'No wrestler selected';
  const wrestlerTitle = req.query.title || 'Unknown and/or this wrestler has no titles.';
  const wrestlerData = { name: wrestlerName, title: wrestlerTitle };
  console.log(wrestlerData);
  res.send(wrestlerData);
};

app.get('/', serveHomePage);
app.get('/favorites', serveFavorites);
app.get('/api/champions', serveChampionsData);
app.get('/api/wrestler', serveWrestlerData);


const port = 4321;
app.listen(port, () => console.log(`listening at http://localhost:${port}`)); 