import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { IStreamer } from "../features/streamers/interfaces";
import { getStreamer } from "../features/streamers/services/streamers";
import Streamer from "../features/streamers/streamer-item/Streamer";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { useState } from "react";
import { SingleStreamerPageStyled } from "../styles/streamers/SingleStreamerStyled";

const SingleStreamerPage = () => {
  const { id } = useParams();
  const [isImageLoading, setIsImageLoading] = useState(true);

  const { isLoading, isError, data, error } = useQuery<IStreamer, Error>(
    ["streamer", { id: id }],
    () => getStreamer(id),
    {
      enabled: !!id,
      retry: 2,
    }
  );

  const loadImage = () => {
    setIsImageLoading(false);
  };

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error msg={error.message} />;
  }

  if (data) {
    return (
      <SingleStreamerPageStyled>
        {isImageLoading ? <Loading /> : null}
        <div className="single-streamer-container">
          <Streamer streamer={data} isSingle={true} loadImage={loadImage} />
        </div>
        <p className="single-streamer-desc">{data.desc}</p>
      </SingleStreamerPageStyled>
    );
  }
};

export default SingleStreamerPage;
