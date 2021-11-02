import { useState } from "react";
import { HiTrash } from 'react-icons/hi'
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai'


const Console = ({consoleMessages, setConsoleMessages}) => {
    const [consoleIsActive, setConsoleIsActive] = useState(true);

    return <div className={"container w-75 mx-auto position-absolute start-0 end-0 border border-4 border-secondary rounded px-0 console " + (consoleIsActive ? "active" : "") }  >
        <div className="d-flex bg-secondary align-items-center p-2 text-light status-bar" onClick={(e) => {if (e.target.className.split(" ").map(item => item.trim()).includes("clear") ) return; setConsoleIsActive(!consoleIsActive)}}>
        
            <h6 className="mono flex-grow-1 fw-bold m-0" >Read Only Console</h6>
            <span className="ms-3 d-flex m-auto clear" onClick={() => {setConsoleMessages([])}}>
                <HiTrash style={{pointerEvents: "none"}}/>
            </span>
            <span className="ms-3 d-flex m-auto" style={{pointerEvents: "none"}}>
                {consoleIsActive ? <AiOutlineCaretDown /> : <AiOutlineCaretUp />}
            </span>
        </div>
        <div className="log bg-light my-0 pb-5">
            {consoleMessages.length ? consoleMessages.map((message, index) => {
                return <p className={"mono my-0 py-1 px-3 fw-bold"}  key={index}>{message}</p>
            }) : null
            }
        </div>
    </div>
}

export default Console;