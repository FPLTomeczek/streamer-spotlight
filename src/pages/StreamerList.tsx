import { useQuery } from "react-query";
import { IStreamer } from "../interfaces";
import { getStreamers } from "../api/streamers";

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
    <div>
      {data?.map((streamer) => {
        return (
          <div>
            <p>Name: {streamer.name}</p>
            <p>platform: {streamer.platform}</p>
            <p>desc: {streamer.desc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default StreamerList;
