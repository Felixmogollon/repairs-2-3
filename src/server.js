import app from "./app.js";
import { authenticated, syncUp } from "./config/database/database.js";
import envs from "./config/enviroments/enviroments.js";

async function main() {
  try {
    await authenticated();
    await syncUp();
  } catch (error) {
    console.log(error);
  }
}

main();

app.listen(envs.PORT, () => {
  console.log(`Server running on port ${envs.PORT}💫💫`);
});

//autentica y sincroniza la base de datos utilizando funciones específicas, 
// y luego inicia el servidor Express para escuchar en un puerto