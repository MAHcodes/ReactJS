import Btn from "../Btn";
import End from "../End";
import JsonInput from "../JsonInput";
import Start from "../Start";
import { useEffect } from 'react';

const Put = ({endpointEntities, getData, endpointData, loadingEntities, handleAddKey, handleRemoveKey, keyValue, getEntities}) => {
    useEffect(getEntities, [])

    return <div className="w-75 mx-auto">
        <h2 className="text-center lead my-5">Choose the entity to update its data</h2>
            <div className="d-flex justify-content-center">
                <div className="btn-group" role="group">
                {endpointEntities.map((entity, index) => {
                    return <Btn key={index} entity={entity} index={index} getData={getData} />
                })}
                </div>
                {!!endpointEntities.length || <h3 className="lead text-center">{loadingEntities ? "Loading Entities..." : "No Entities"}</h3>}
            </div>
            {endpointData.map(item => {
                console.log(item)
                return <div className="mx-auto mt-4" style={{userSelect: "none"}}>
                    <Start />
                    <JsonInput keyValue={keyValue}
                        handleRemoveKey={handleRemoveKey}
                    />
                    <End handleAddKey={handleAddKey}/>
                </div>
            })}
        </div>
}

export default Put;