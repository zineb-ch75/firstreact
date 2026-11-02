
export default function MoodDisplay(props){
    return(
        <div style = {{backgroundColor: props.color}}>
        <p> Aujourd'hui,je me sens {props.m}!</p>
        </div>
    );
}