import { useEffect } from "react";
import Btn from "../Btn";
import Code from "../Code";

const Get = ({endpointEntities, getEntities, getData, endpointData, copyToClipboard, loadingEntities}) => {
    useEffect(getEntities, [])

    return <div className="w-75 mx-auto">
        <h2 className="text-center lead my-5">Choose the entity to get its data</h2>
            <div className="d-flex justify-content-center">
                <div className="btn-group" role="group">
                {endpointEntities.map((entity, index) => {
                    return <Btn key={index} entity={entity} index={index} getData={getData} />
                })}
                </div>
                {!!endpointEntities.length || <h3 className="lead text-center">{loadingEntities ? "Loading Entities..." : "No Entities"}</h3>}
            </div>

        <div className="w-75 mx-auto mt-4" style={{userSelect: "none"}}>
            {endpointData.map(item => {
                return <Code key={item._id} item={item} copyToClipboard={copyToClipboard} />
            })}
        </div>
    </div>
}

export default Get;