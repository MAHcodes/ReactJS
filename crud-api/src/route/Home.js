import { Link } from "react-router-dom";

const Home = () => {
    return <div className="w-75 mx-auto pt-3">
        <div className="my-5">
            <h3 className="my-2">CRUD API</h3>
            <hr />
            <p className="mb-5 py-2">With the help of this app you can use the <a href="https://crudcrud.com" target="_blank">crudcrud.com</a> API without needing a single line of code.</p>

            <h3 className="my-2">Usage</h3>
            <hr />
            <p><span className="h2 me-2">1.</span>Get an Endpoint from <a href="https://crudcrud.com" target="_blank">crudcrud.com</a> to start using this app.</p>
        </div>

        <form className="py-5">
            <label className="mb-2"><span className="h2 me-2">2.</span>Enter your Endpoint:</label>
            <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon3">https://crudcrud.com/api/</span>
            <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" />
            <input type="submit" className="btn btn-primary d-block" value="Get Started"/>
            </div>
        </form>


        <div className="my-5 d-flex pe-3">
            <p><span className="h2 me-2">3.</span>Now you can start with:</p>
            <div className="d-flex flex-column px-3 pt-3"><span><Link to="/POST">POST</Link> to create new entities,</span><span><Link to="/GET">GET</Link> to get them,</span><span><Link to="/PUT">PUT</Link> to update them,</span><spanspan><Link to="DELETE">DELETE</Link> to delete entities.</spanspan></div>
        </div>

        <div className="py-4">
            <h3 className="my-2">About</h3>
            <hr />
            <div className="d-flex">
                <p>This is an <a href="https://github.com/mhmdali102/ReactJS/crud-api" target="_blank">Open source app</a>, build by <a href="https://github.com/mhmdali102" target="_blank">Mhmd Ali Hsen</a> with </p>
                <ul className="mb-5">
                    <li><a href="https://reactjs.org" target="_blank">ReactJS</a></li>
                    <li><a href="https://getbootstrap.com" target="_blank">Bootstrap 5</a></li>
                </ul>
            </div>
        </div>
        <div className="mb-4">
            <h3 className="my-2">License</h3>
            <hr />
            <p>This project is licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank" >MIT</a> License - see the <a href="https://github.com/mhmdali102/ReactJS/blob/main/LICENSE" target="_blank" >LICENSE</a> file for details.</p>
        </div>
    </div>
}

export default Home;