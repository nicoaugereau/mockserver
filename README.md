# mockserver

Mock server with random datas, based on [Casual Fake data generator](https://www.npmjs.com/package/casual)

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

### Embedded generators

  // Address

  casual.country              // 'United Kingdom'
  casual.city                 // 'New Ortiz chester'
  casual.zip(digits = {5, 9}) // '26995-7979' (if no digits specified then random selection between ZIP and ZIP+4)
  casual.street               // 'Jadyn Islands'
  casual.address              // '6390 Tremblay Pines Suite 784'
  casual.address1             // '8417 Veda Circles'
  casual.address2             // 'Suite 648'
  casual.state                // 'Michigan'
  casual.state_abbr           // 'CO'
  casual.latitude             // 90.0610
  casual.longitude            // 180.0778
  casual.building_number      // 2413

  // Text

  casual.sentence               // 'Laborum eius porro consequatur.'
  casual.sentences(n = 3)       // 'Dolorum fuga nobis sit natus consequatur. Laboriosam sapiente. Natus quos ut.'
  casual.title                  // 'Systematic nobis'
  casual.text                   // 'Nemo tempore natus non accusamus eos placeat nesciunt. et fugit ut odio nisi dolore non ... (long text)'
  casual.description            // 'Vel et rerum nostrum quia. Dolorum fuga nobis sit natus consequatur.'
  casual.short_description      // 'Qui iste similique iusto.'
  casual.string                 // 'saepe quia molestias voluptates et'
  casual.word                   // 'voluptatem'
  casual.words(n = 7)           // 'sed quis ut beatae id adipisci aut'
  casual.array_of_words(n = 7)  // [ 'voluptas', 'atque', 'vitae', 'vel', 'dolor', 'saepe', 'ut' ]
  casual.letter                 // 'k'

  // Internet

  casual.ip           // '21.44.122.149'
  casual.domain       // 'darrion.us'
  casual.url          // 'germaine.net'
  casual.email        // 'Josue.Hessel@claire.us'
  casual.user_agent   // 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:34.0) Gecko/20100101 Firefox/34.0'

  // Person

  casual.name            // 'Alberto'
  casual.username        // 'Darryl'
  casual.first_name      // 'Derek'
  casual.last_name       // 'Considine'
  casual.full_name       // 'Kadin Torphy'
  casual.password        // '(205)580-1350Schumm'
  casual.name_prefix     // 'Miss'
  casual.name_suffix     // 'Jr.'
  casual.company_name    // 'Cole, Wuckert and Strosin'
  casual.company_suffix  // 'Inc'
  casual.catch_phrase    // 'Synchronised optimal concept'
  casual.phone           // '982-790-2592'

  // Numbers

  casual.random                            // 0.7171590146608651 (core generator)
  casual.integer(from = -1000, to = 1000)  // 632
  casual.double(from = -1000, to = 1000)   // -234.12987444
  casual.array_of_digits(n = 7)            // [ 4, 8, 3, 1, 7, 6, 6 ]
  casual.array_of_integers(n = 7)          // [ -105, -7, -532, -596, -430, -957, -234 ]
  casual.array_of_doubles(n = 7)           // [ -866.3755785673857, -166.62194719538093, ...]
  casual.coin_flip                         // true

  // Date

  casual.unix_time                    // 659897901
  casual.moment                       // moment.js object see http://momentjs.com/docs/
  casual.date(format = 'YYYY-MM-DD')  // '2001-07-06' (see available formatters http://momentjs.com/docs/#/parsing/string-format/)
  casual.time(format = 'HH:mm:ss')    // '03:08:02' (see available formatters http://momentjs.com/docs/#/parsing/string-format/)
  casual.century                      // 'IV'
  casual.am_pm                        // 'am'
  casual.day_of_year                  // 323
  casual.day_of_month                 // 9
  casual.day_of_week                  // 4
  casual.month_number                 // 9
  casual.month_name                   // 'March'
  casual.year                         // 1990
  casual.timezone                     // 'America/Miquelon'

  // Payments

  casual.card_type            // 'American Express'
  casual.card_number(vendor)  // '4716506247152101' (if no vendor specified then random)
  casual.card_exp             // '03/04'
  casual.card_data            // { type: 'MasterCard', number: '5307558778577046', exp: '04/88', holder_name: 'Jaron Gibson' }

  // Misc

  casual.country_code    // 'ES'
  casual.language_code   // 'ru'
  casual.locale          // 'hi_IN'
  casual.currency        // { symbol: 'R', name: 'South African Rand', symbol_native: 'R', decimal_digits: 2, rounding: 0, code: 'ZAR', name_plural: 'South African rand' }		
  casual.currency_code   // 'TRY'
  casual.currency_symbol // 'TL'
  casual.currency_name   // Turkish Lira
  casual.mime_type       // 'audio/mpeg'
  casual.file_extension  // 'rtf'
  casual.boolean         // true
  casual.uuid            // '2f4dc6ba-bd25-4e66-b369-43a13e0cf150'

  // Colors

  casual.color_name       // 'DarkOliveGreen'
  casual.safe_color_name  // 'maroon'
  casual.rgb_hex          // '#2e4e1f'
  casual.rgb_array        // [ 194, 193, 166 ]

### Localization

You can get localized version of casual generator:

  var casual = require('casual').ru_RU;
  casual.street; // 'Бухарестская'

