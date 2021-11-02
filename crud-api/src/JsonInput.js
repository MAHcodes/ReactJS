const JsonInput = ({keyValue, setKeyValue}) => {
    return (keyValue.map(item => {
        return <div className="text-center" id="jsonInput" key={item}>
            <span className="ms-4">"</span>
            <input type="text" className="form-control d-inline-block ms-2  my-2 w-25 ps-2" placeholder="Key"/>
            <span className="ms-2">"</span>
            <span className="ms-4">:</span>
            <span className="ms-4">"</span>
            <input type="text" className="form-control d-inline-block ms-2  my-2 w-50 ps-2" placeholder="Value"/>
            <span className="ms-2">"  ,</span>
        </div>
        })
    )
}

export default JsonInput;