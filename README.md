# mockserver

Mock server with random datas, based on (Casual Fake data generator)[https://www.npmjs.com/package/casual]

Usage: 
- node index.js

## API

### Users

Use and/or modify the `index.js` file from users.

Return these values: name, surname, address, phone, email, postalCode, city, number, id
 
### Tarificateur
Use and/or modify the `index.js` file from tarificateur.

Return these values: date, fumeur, montant, postalCode, number
 

## Create your file

Create new folder and index files in this new folder.

Add this in the `index.js`:
  const casual = require("casual");

  module.exports = () => {
    casual.define("tarificateur", function () {
      return {
        date: casual.date,
        fumeur: casual.integer((from = 1), (to = 2)),
        montant: casual.double((from = 10), (to = 9000)),
        postalCode: casual.zip,
        number: casual.building_number,
      };
    });
    const data = {
      tarif: [],
    };
    // Create 10 values
    for (let i = 0; i < 10; i++) {
      data.tarif.push(casual.tarificateur);
    }
    return data;
  };
