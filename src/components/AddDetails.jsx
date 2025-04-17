import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../redux/postRedux";


const AddDetails = () => {

    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleAddPost = () => {
        const newTitle = title;
        const newcontent = content;

        dispatch(addPost(newTitle, newcontent));
        setTitle('')
        setContent('');
    }

    return (
        <div style={{ border: "1px solid black", padding: "10px", width: "300px", textAlign: "center" }}>
            <div>
                <h3>Add Name</h3>
                <input
                    style={{ width: "100%", height: "35px" }}
                    type="text"
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value)
                    }}
                    placeholder="Enter your title"
                />
            </div>

            <div>
                <h3>Add Email</h3>
                <input
                    style={{ width: "100%", height: "35px" }}
                    type="text"
                    value={content}
                    onChange={(e) => {
                        setContent(e.target.value)
                    }}
                    placeholder="Enter your content"
                />
            </div>

            <div style={{ paddingTop: "20px" }}>
                <button onClick={handleAddPost}>Add post</button>
            </div>
        </div>
    )
}

export default AddDetails;