
export default function Post({item,postss}){

    return(<div>
        <h2>{item.name} - {item.email}</h2>
        <button onClick={()=>{postss(item.postId)}}>Post</button>

    </div>)
}