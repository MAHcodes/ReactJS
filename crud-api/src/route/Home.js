import { Link } from "react-router-dom";

const Home = ({handleEndpoint, userEndPoint, setUserEndPoint, ifUserEnd, setIfUserEnd}) => {
    return <div className="w-75 mx-auto pt-3">
        <div className="my-5">
            <h3 className="my-2">CRUD API</h3>
            <hr />
            <p className="mb-5 py-2">With the help of this web app you can use the <a href="https://crudcrud.com" target="_blank" rel="noreferrer">crudcrud.com</a> API without writing a single line of code.</p>

            <h3 className="my-2">Usage</h3>
            <hr />
            <p><span className="h2 me-2">1.</span>Get an Endpoint from <a href="https://crudcrud.com" target="_blank" rel="noreferrer">crudcrud.com</a> to start using this app.</p>
        </div>

        <form className="py-5" onSubmit={e => handleEndpoint(e)}>
            <label className="mb-2"><span className="h2 me-2">2.</span>Enter your Endpoint:</label>
            <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon3">https://crudcrud.com/api/</span>
            <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" value={userEndPoint} onChange={e => {setUserEndPoint(e.target.value); setIfUserEnd(false)}} required />
            <input type="submit" className="btn btn-primary d-block" value="Get Started"/>
            </div>
            {ifUserEnd && <p>Done! your Endpoint is https://crudcrud.com/api/{userEndPoint}</p>}
        </form>


        <div className="my-5 d-flex pe-3">
            <p><span className="h2 me-2">3.</span>Now you can start with:</p>
            <div className="d-flex flex-column px-3 pt-3"><span><Link to="/POST">POST</Link> to create new entities,</span><span><Link to="/GET">GET</Link> to read them,</span><span><Link to="/PUT">PUT</Link> to update them,</span><span><Link to="DELETE">DELETE</Link> to remove entities.</span></div>
        </div>

        <div className="py-4">
            <h3 className="my-2">About</h3>
            <hr />
            <div className="d-flex">
                <p>This is an <a href="https://github.com/mhmdali102/ReactJS/tree/main/crud-api" target="_blank" rel="noreferrer">Open source app</a>, build by <a href="https://github.com/mhmdali102" target="_blank" rel="noreferrer">Mhmd Ali Hsen</a> with </p>
                <ul className="mb-5">
                    <li><a href="https://reactjs.org" target="_blank" rel="noreferrer">ReactJS</a></li>
                    <li><a href="https://getbootstrap.com" target="_blank" rel="noreferrer">Bootstrap 5</a></li>
                </ul>
            </div>
        </div>
        <div className="mb-4">
            <h3 className="my-2">License</h3>
            <hr />
            <p>This project is licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noreferrer">MIT</a> License - see the <a href="https://github.com/mhmdali102/ReactJS/blob/main/LICENSE" target="_blank" rel="noreferrer">LICENSE</a> file for details.</p>
        </div>
    </div>
}

export default Home;