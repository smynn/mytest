import {useEffect, useState} from "react";
import {getUsers} from "../services/user.services";
import UsetComponents from "../components/UserComponents";

export default function Home() {
    let [users, setUsers] = useState([]);
    useEffect(()=>{
        getUsers().then(value => setUsers(value.data))
    },[])
    return(<div>
        {users.map(value => <UsetComponents key={value.id} item={value}/>)}
    </div>)

}