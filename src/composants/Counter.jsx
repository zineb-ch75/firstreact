import { useState } from "react";
import Valeur from "./Valeur";
import PasIncrementation from "./PasIncrementation";
import PasDecrementation from "./PasDecrementation";
export default function Counter() {
    const [count, setCount] = useState(0);
    function incrementer(pas) {
        setCount(count + pas);
    }
    function decrementer(pas) {
        setCount(count - pas);
    }
    function initialiser() {
        setCount(0);
    }
    return (
        <div>
            <Valeur valeur={count} />
            <button onClick={initialiser}>
                Initialiser
            </button>
            <PasIncrementation incrementer={incrementer} />
            <PasDecrementation decrementer={decrementer} />

        </div>
    );
}