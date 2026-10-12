import Client from "./composants/Client.jsx";
import Visiteur from "./composants/Visiteur.jsx";

function app(){
  let c = true;
  let name = "Zineb";
  return(
    <div>
      {c ?<Client nom={name}/> : <Visiteur/>}
    </div>
  );
}
export default app;