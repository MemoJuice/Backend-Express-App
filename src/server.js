import { app } from "./app.js";
import { connectDB } from "./config/mongodb.js";

const port = 3000;

try {
  await connectDB();
  app.listen(port, () => {
    console.log(`Server running on port: ${port}🟩`);
  });
} catch (error) {
  console.error("Startup Failed", error);
  process.exit(1);
}
