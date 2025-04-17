import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../redux/postRedux";


const Main = () => {

    const dispatch = useDispatch();

    const posts = useSelector((state) => state.post);

    return (
        <div style={{borderBottom:"1px solid black", width:"100%",display:"flex",flexDirection:"column",alignItems:"center",marginBottom:"20px"}}>
            <div>
                {posts.map((item, index) => (
                    <div key={index} style={{display:"flex",alignItems:"center",gap:"20px"}}>
                        <div>
                            <h3>{item.title}</h3>
                            <p>{item.content}</p>
                        </div>
                        <button onClick={() => dispatch(deletePost(item.id))}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Main;
