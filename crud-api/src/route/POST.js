import End from "../End";
import JsonInput from "../JsonInput";
import Start from "../Start";
import { useState } from "react";

const Post = ({handlePOST, keyValue, handleRemoveKey, handleAddKey}) => {
    
    return <form className="container-md" onSubmit={e => handlePOST(e)}>
        <h2 className="text-center lead my-5">Create an entity represented by the JSON payload.</h2>
        <div className="w-75 mx-auto mt-4" style={{userSelect: "none"}}>
            <Start />
            <JsonInput keyValue={keyValue}
                handleRemoveKey={handleRemoveKey}
            />
            <End handleAddKey={handleAddKey}/>
        </div>

    </form>
}

export default Post;