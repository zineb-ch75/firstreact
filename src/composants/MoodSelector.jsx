import MoodHistory from "./MoodHistory";
import {useState} from "react";
import MoodDisplay from "./MoodDisplay";
export default function MoodSelector(){
    const moods = [ { label: "😊 Heureux",
         value: "Heureux", color: "#ffeb3b" },
        { label: "😴 Fatigué", value: "Fatigué",
        color: "#81d4fa" }, { label: "😡 Stressé", 
        value: "Stressé", color: "#ef9a9a" },
        { label: "😎 Motivé", value: "Motivé",
        color: "#a5d6a7" }, ]; 
         const [humeur, setHumeur] = useState("Aucune humeur!");
         const [coulor,setCoulor] = useState("white");
         const[historique,setHistorique]=useState([]);

         function history(m){
            setHumeur(m.value);
            setCoulor(m.color);
            setHistorique([...historique,m.value]);
         }
         function reinitialiser(){
            setHumeur("aujourdhui,je me sens Aucune humeur !")
         }
         function history(){
            setHistorique([])
         }
    return (
        <div>
            {moods.map((m,index)=>
            <button 
            key={index}
            style={{backgroundColor: m.color}}
            onClick={() => history(m)}>{m.label}!</button>
            
            )}
            <button onClick={reinitialiser}>reinitialiser</button>
            <button onClick={history}> vider l'historique</button>
                <MoodDisplay m={humeur} color={coulor} />
                <MoodHistory historique={historique}/>
        </div>
    );
}