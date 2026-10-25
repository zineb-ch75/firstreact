
import "./General.css";

function General() {
  return (
    <div className="general">
      <h3 className="titre"> <span className="carre"></span> 
      General Information</h3>

      <table>
        <tbody>
          <tr>
            <td>ROLL :</td>
            <td>125</td>
          </tr>
          <tr>
            <td>Academic Year :</td>
            <td>2020</td>
          </tr>
          <tr>
            <td>Gender :</td>
            <td>Male</td>
          </tr>
          <tr>
            <td>Religion :</td>
            <td>Groupe</td>
          </tr>
          <tr>
            <td>Blood :</td>
            <td>B+</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default General;
