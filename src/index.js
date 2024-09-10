import { PORT } from "./config.js";
import { app } from "./app.js";
import { connection } from "./database.js";

connection();

app.listen(PORT, () => {
    console.log("Server running on port", PORT);
});