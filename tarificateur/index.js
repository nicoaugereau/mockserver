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

  // Create 10 users
  for (let i = 0; i < 10; i++) {
    data.tarif.push(casual.tarificateur);
  }
  return data;
};
