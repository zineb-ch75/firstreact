function student(){
   let stg = {nom :"Mohamed El Bakkali",id_s : "321000001" , class: "4", section: "A"}
   return (
        <div>
            <img src=""></img>
             <p>{stg.nom}</p>
             <p> Student ID : {stg.id_s}</p>
             <p> Class : {stg.class}</p>
             <p>Section: {stg.section}</p>
       </div>
   );
}
export default student;