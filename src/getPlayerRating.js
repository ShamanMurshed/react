const fs = require('fs');
const csv = require('csv-parser');

// Path to the CSV file
const filePath = '../all_players.csv'; // Ensure this is the correct relative path

// Function to load player ratings
async function getPlayerRating(playerName) {
  return new Promise((resolve, reject) => {
    const playerRatings = [];

    // Read and parse the CSV file
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (row) => {
        console.log(`Checking player: ${row['Name']}`); // Access the "Name" column correctly

        // Find the row for the given player name
        if (row['Name'] && row['Name'].toLowerCase() === playerName.toLowerCase()) {
          playerRatings.push({
            name: row['Name'], // Access "Name" column
            overall_rating: row['OVR'], // Access "OVR" column
            club: row['Team'], // Access "Team" column
            position: row['Position'], // Access "Position" column
          });
        }
      })
      .on('end', () => {
        if (playerRatings.length > 0) {
          resolve(playerRatings[0]); // Return the first match
        } else {
          reject(`Player ${playerName} not found`);
        }
      })
      .on('error', (error) => reject(error));
  });
}

// Example: rating for Cole Palmer
getPlayerRating('Cole Palmer')
  .then((player) => {
    console.log(`Player: ${player.name}`);
    console.log(`Overall Rating: ${player.overall_rating}`);
    console.log(`Club: ${player.club}`);
    console.log(`Position: ${player.position}`);
  })
  .catch((error) => console.error(error));
