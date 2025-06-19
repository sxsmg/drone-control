const app = require('./app');
const { sequelize } = require('./models/postgres');
const connectMongo = require('./config/db.mongo');

// Load env if using dotenv (optional, but often needed)
require('dotenv').config();

const PORT = process.env.PORT || 3001;

(async () => {
  try {
    await sequelize.sync();
    await connectMongo();
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.error('Startup error:', err);
  }
})();
