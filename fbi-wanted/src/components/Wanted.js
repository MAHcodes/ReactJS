import useFetch from "../hooks/useFetch";
import {useEffect, useState} from "react";
import Error from "./Error";
import Loading from "./Loading";
import Section from "./Section";
import {useParams} from "react-router-dom";

const Wanted = () => {
  const {uid} = useParams()
  const [info, setInfo] = useState("");
  const {data, error, isLoading} = useFetch(`https://api.fbi.gov/@wanted-person/${uid}`);

  useEffect(() => {
    setInfo(data);
    console.log(data)
  }, [data]);

  return (
    <div className="container">
      {isLoading ? <Loading /> :
        error ? <Error /> :
          (
            <div className="info">
              {info.title && <h2>{info?.title}</h2>}
              {info.description && <p>{info?.description.split(";").join(",")}</p>}
              {info.images && <img src={info?.images[0].original} alt={info?.images[0].caption} />}
              {info.files &&
                info.files.map(file => (
                  <a key={file.url} href={file.url} target="blank">{file.name}</a>
                ))}
              {info.images && (info.images.map(img => (
                <img key={img.thumb} src={img.thumb} alt={img.caption} />
              )))}
              {info.dates_of_birth_used && <Section title="Date(s) of Birth Used: " desc={info.dates_of_birth_used.join(", ")} brk={false} />}
              {info.remarks && <Section title="Remarks: " desc={(info.remarks).replaceAll("<p>", "").replaceAll("</p>", "")} brk />}
              {info.reward_text && <Section title="Reward: " desc={info.reward_text} brk />}
              {info.caution && <Section title="caution: " desc={(info.caution).replaceAll("<p>", "").replaceAll("</p>", "")} brk />}
            </div>
          )
      }
    </div>
  )

};

export default Wanted;
