const express = require('express');
const fs = require('fs');
const csv = require('csv-parser');
const cors = require('cors');  // Import cors

const app = express();
const port = 5001;

// Path to the CSV file
const filePath = '../all_players.csv'; 

// Enable CORS for all routes
app.use(cors());

// Function to fetch player rating
function getPlayerRating(playerName) {
  return new Promise((resolve, reject) => {
    const playerRatings = [];

    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (row) => {
        if (row['Name'] && row['Name'].toLowerCase() === playerName.toLowerCase()) {
          playerRatings.push({
            name: row['Name'],
            overall_rating: row['OVR'],
            club: row['Team'],
            position: row['Position'],
          });
        }
      })
      .on('end', () => {
        if (playerRatings.length > 0) {
          resolve(playerRatings[0]);
        } else {
          reject(`Player ${playerName} not found`);
        }
      })
      .on('error', (error) => reject(error));
  });
}

//get player rating
app.get('/api/player/:name', async (req, res) => {
  const playerName = req.params.name;
  try {
    const player = await getPlayerRating(playerName);
    res.json(player);
  } catch (error) {
    res.status(404).send(error);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
