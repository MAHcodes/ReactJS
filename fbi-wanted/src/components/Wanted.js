import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";
import Error from "./Error";
import Loading from "./Loading";
import Section from "./Section";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Wanted = () => {
  const { uid } = useParams();
  const [info, setInfo] = useState("");
  const { data, error, isLoading } = useFetch(
    `https://api.fbi.gov/@wanted-person/${uid}`
  );

  useEffect(() => {
    setInfo(data);
  }, [data]);

  return (
    <div className="container">
      {isLoading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <div className="info">
          {info.title && <h2 style={{ marginBlock: ".5em" }}>{info?.title}</h2>}
          {info.description && (
            <p style={{ marginBlock: ".5em" }}>
              {info?.description.split(";").join(",")}
            </p>
          )}
          {info.images && (
            <img
              style={{ maxHeight: "500px" }}
              src={info?.images[0].original}
              alt={info?.images[0].caption}
            />
          )}
          <Flex>
            {info.files && (
              <FilesContainer>
                <span>Download Poster:&#9;</span>
                {info.files.map((file) => (
                  <>
                    {file.url !== info.files[0].url && <span>, </span>}
                    <a key={file.url} href={file.url} target="blank">
                      {file.name}
                    </a>
                  </>
                ))}
              </FilesContainer>
            )}
          </Flex>
          <Flex>
            {info.images &&
              info.images.map((img) => (
                <img key={img.thumb} src={img.thumb} alt={img.caption} />
              ))}
          </Flex>
          {info.dates_of_birth_used && (
            <Section
              title="Date(s) of Birth Used: "
              desc={info.dates_of_birth_used.join(", ")}
            />
          )}
          {info.place_of_birth && (
            <Section title="Place of Birth: " desc={info.place_of_birth} />
          )}
          {info.nationality && (
            <Section title="Nationality: " desc={info.nationality} />
          )}
          {info.locations && (
            <Section title="Locations: " desc={info.locations} />
          )}
          {info.possible_countries && (
            <Section
              title="Possible countries: "
              desc={info.possible_countries}
            />
          )}
          {info.possible_states && (
            <Section title="Possible states: " desc={info.possible_states} />
          )}
          {info.scars_and_marks && (
            <Section title="Scars and marks: " desc={info.scars_and_marks} />
          )}
          {info.suspects && <Section title="Suspects: " desc={info.suspects} />}
          {info.eyes_raw && <Section title="Eyes: " desc={info.eyes_raw} />}
          {info.hair && <Section title="Hair: " desc={info.hair_raw} />}
          {info.weight && <Section title="Weight: " desc={info.weight} />}
          {(info.height_min || info.height_max) && (
            <Section
              title="Height: "
              desc={info.height_max || info.height_min}
            />
          )}
          {info.race_raw && <Section title="Race: " desc={info.race_raw} />}
          {info.sex && <Section title="Sex: " desc={info.sex} />}
          {info.status && <Section title="Status: " desc={info.status} />}
          {info.ncic && <Section title="NCIC: " desc={info.ncic} />}
          {info.remarks && (
            <Section
              title="Remarks: "
              desc={info.remarks.replaceAll("<p>", "").replaceAll("</p>", "")}
              brk
            />
          )}
          {info.reward_text && (
            <Section title="Reward: " desc={info.reward_text} brk />
          )}
          {info.caution && (
            <Section
              title="Caution: "
              desc={info.caution.replaceAll("<p>", "").replaceAll("</p>", "")}
              brk
            />
          )}
          {info.details && (
            <Section
              title="Details: "
              desc={info.details.replaceAll("<p>", "").replaceAll("</p>", "")}
              brk
            />
          )}
          {info.warning_message && (
            <Section
              title="Warning: "
              desc={info.warning_message}
              warning={true}
            />
          )}
        </div>
      )}
    </div>
  );
};

const Flex = styled.div`
  display: flex;
  margin-block: 1rem;
  gap: 1rem;
`;

const FilesContainer = styled.div`
  display: inline-block;
  font-size: 1.1rem;
  font-weight: bold;
  margin-block: 0.25em;
`;

export default Wanted;
