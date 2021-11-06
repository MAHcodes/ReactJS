import Btn from "../Btn";
import End from "../End";
import JsonInput from "../JsonInput";
import Start from "../Start";
import { useEffect } from "react";

const Put = ({
  endpointEntities,
  getData,
  endpointData,
  loadingEntities,
  handleAddKey,
  handleRemoveKey,
  keyValue,
  getEntities,
  setKeyValue,
  endpointTitle
}) => {
  useEffect(getEntities, []);

  return (
    <div className="w-75 mx-auto">
      <h2 className="text-center lead my-5">
        Choose the entity to update its data
      </h2>
      <div className="d-flex justify-content-center">
        <div className="btn-group" role="group">
          {endpointEntities.map((entity, index) => {
            return (
              <Btn
                key={index}
                entity={entity}
                index={index}
                getData={getData}
              />
            );
          })}
        </div>
        {!!endpointEntities.length || (
          <h3 className="lead text-center">
            {loadingEntities ? "Loading Entities..." : "No Entities"}
          </h3>
        )}
      </div>
    <div className="mx-auto mt-4" style={{userSelect: "none"}}>
        {endpointData.map(data => {
            return <div className="wrapper">
                <Start endpointTitle={endpointTitle} />
                    {/* {console.log(Object.entries(data), "ehehhh")} */}
                    {Object.entries(data).map(pair => {
                        if (pair[0] !== "_id") {
                        return <JsonInput keyValue={keyValue}
                        handleRemoveKey={handleRemoveKey}
                        jsonKey={pair[0]}
                        jsonValue={pair[1]}
                        />
                        }
                        return false;
                    })}
                <End actionText="Update" handleAddKey={handleAddKey}/>
            </div>
        })}
    </div>
    </div>
  );
};

export default Put;
