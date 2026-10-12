function g_info(){
   let info = {roll :" 125 ",academic_y : "2020" , gender: "male", religion: "groupe", blood : "B+"}
   styleg = {fontweight: "bold" };
   return (
        <div>
            <p style = {styleg}> General information</p>
             <p> Roll : {info.roll}</p>
             <p>Academic Year : {info.academic_y}</p>
             <p> Gender : {info.gender}</p>
             <p>Religion: {info.religion}</p>
             <p>blood: {info.blood}</p>
       </div>
   );
}
export default g_info;