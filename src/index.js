import { PORT } from "./config.js";
import { app } from "./app.js";
import { connection } from "./database.js";
import { swaggerSetup } from "./swagger.js";
import { createRoles } from './libs/rolesInitialSetup.js'

connection();
createRoles(); // Create default roles 
swaggerSetup(app); // Add swagger docs route

app.listen(PORT, () => {
    console.log("Server running on port", PORT);
});