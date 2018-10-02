const cors = require('cors');
const bodyParser = require('body-parser');

// const CONSTANT_WHITELIST = require('./constants/frontend');
// const IMAGES_WHITELIST = './images'
//
// const corsOptions = {
//   origin: (origin, callback) => {
//     console.log("origin", origin)
//     console.log("CONSTANT_WHITELIST", CONSTANT_WHITELIST)
//     (CONSTANT_WHITELIST.indexOf(origin) !== -1 ||
//     IMAGES_WHITELIST.indexOf(origin) !== -1)
//       ? callback(null, true)
//       : callback(new Error('Not allowed by CORS'))
//     }
// };

const configureServer = app => {
  // app.use(cors(corsOptions));
  app.use(cors())

  app.use(bodyParser.json());
};

module.exports = configureServer;
