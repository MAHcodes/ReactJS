const End = ({handleAddKey}) => {
    return <div>
        <span className="ms-5 d-block mt-2">{"}"}</span>
        <br />
        <span className="d-block mb-3">{"}"}</span>
        <div className="btns d-flex justify-content-end">
            <input type="submit" value="Add key" className="btn btn-secondary me-2" onClick={e => handleAddKey(e)}/>
            <input type="submit" value="Create" className="btn btn-primary" />
        </div>
    </div>
}

export default End;