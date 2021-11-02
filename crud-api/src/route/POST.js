import End from "../End";
import JsonInput from "../JsonInput";
import Start from "../Start";
import { useState } from "react";

const Post = ({handlePOST}) => {
    
    const [keyValue, setKeyValue] = useState([1]);
    const handleAddKey = (e) => {
        e.preventDefault();
        setKeyValue(keyValue.concat( [Math.max(...keyValue) + 1]));
    };

    const handleRemoveKey = (item) => {
        const newItems = keyValue.filter(i => i !== item);
        setKeyValue(newItems);
    }

    return <form className="container-md" onSubmit={e => handlePOST(e)}>
        <h2 className="text-center lead my-5">Create an entity represented by the JSON payload.</h2>
        <div className="w-75 mx-auto mt-4" style={{userSelect: "none"}}>
            <Start />
            <JsonInput keyValue={keyValue}
                setKeyValue={setKeyValue}
                handleRemoveKey={handleRemoveKey}
            />
            <End handleAddKey={handleAddKey}/>
        </div>

    </form>
}

export default Post;