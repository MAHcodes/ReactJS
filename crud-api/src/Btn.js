const Btn = ({entity, index, getData}) => {
    return <>
        <input type="radio" className="btn-check" name="btnradio" id={`btn${index}` } autoComplete="off"/>
        <label className="btn btn-outline-primary" htmlFor={`btn${index}`} onClick={() => getData(entity)}>{entity}</label>
    </>

}

export default Btn;