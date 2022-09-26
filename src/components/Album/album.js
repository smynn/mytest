import {useEffect, useState} from "react";
import {getAlbums} from "../../services/user.services";


export default function Albums() {
    let [inform, setInform] = useState([]);
    useEffect(()=>{
        getAlbums().then(value => setInform(value))
    },[])
    return(<div>
        {JSON.stringify(inform)}
    </div>)

}