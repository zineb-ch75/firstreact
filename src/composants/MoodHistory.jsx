export default function MoodHistory(props){
    return(
        <div>
            <h3>historique des humeurs</h3>
            {props.historique.map((h,index)=>(
                <p key={index}>{h}</p>
            )

            )}
        </div>
    );
}