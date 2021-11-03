import { IoCopy } from "react-icons/io5";

const Code = ({item, copyToClipboard}) => {
    delete item._id;

    return <div className="mono">
            <pre className="position-relative bg-dark text-light rounded p-4">
                <code>{JSON.stringify(item, null, 2)}</code>
                <span className="position-absolute" style={{top: "10px", right: "10px", cursor: "pointer"}} onClick={e => copyToClipboard(e)} data-toggle="tooltip" data-placement="top" title="Copy to clipboard" >
                    <IoCopy style={{pointerEvents: "none"}} />
                </span>
            </pre>
    </div>
}

export default Code;