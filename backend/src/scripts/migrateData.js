const connectDB = require("../config/db");
// Add any future migration logic here
const migrate = async () => {
  await connectDB();
  console.log("✅ Migration completed (no changes yet)");
  process.exit(0);
};

migrate();
