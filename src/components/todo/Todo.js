import {useEffect, useState} from "react";
import {getTodos} from "../../services/user.services";


export default function Todo() {
    let [inform, setInform] = useState([]);
    useEffect(()=>{
        getTodos().then(value => setInform(value))
    },[])
    return(<div>
        {JSON.stringify(inform)}
    </div>)

}