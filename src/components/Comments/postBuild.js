import {useEffect, useState} from "react";
import {getPosts} from "../../services/user.services";
import Post from "./post";


export default function Comments() {
    let [inform, setInform] = useState([]);
    useEffect((id)=>{
        getPosts(id).then(value => setInform(value))
    },[id])
    return(<div>
        {inform.map(value => <Post key={value.id} item={value}/>)}
    </div>)

}