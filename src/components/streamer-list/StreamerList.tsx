import { useQuery } from "react-query";
import { IStreamer } from "../../interfaces";
import { getStreamers } from "../../api/streamers";
import Streamer from "../../components/streamer-list/Streamer";
import { StreamerListStyled } from "../../styles/streamer-list/StreamerList.styled";

const StreamerList = () => {
  const { isLoading, isError, error, data } = useQuery<IStreamer[], Error>(
    "streamers",
    getStreamers
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  return (
    <StreamerListStyled>
      {data?.map((streamer) => {
        return <Streamer streamer={streamer} key={streamer._id} />;
      })}
    </StreamerListStyled>
  );
};

export default StreamerList;
