import axios from "axios";
import {Link} from "react";
import { useState, useEffect } from "react";

export default function UserList(){
        const [users,setUsers] = useState([])
        useEffect(()=> {
            axios.get('https://jsonplaceholder.typicode.com/users')
                .then((res)=>{setUsers(res.data)})
},[])
return(
    
    <div>
        {console.log(users)}
        <h3> Liste Utilisateurs</h3>
        <table>
            <thead>
            <th>
                <td> ID</td>
                <td>Utilisateur</td>
                <td>E-MAIL</td>
                <td>TELEPHONE</td>
                <td>ACTIONS</td>
            </th>
            </thead>

            <tbody>
            {users.map(user=>{
                return(
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.Phone}</td>
                    <td>
                        {/* <Link to = {`/UserCard/${user.id}`}>detail</Link>
                        <Link to = {`/modifier/${user.id}`}>detail</Link>
                        <Link to = {`/delete/${user.id}`}>detail</Link> */}
                    </td>
                </tr>
            )}
            )}
            </tbody>
        </table>
    </div>
);

    } 