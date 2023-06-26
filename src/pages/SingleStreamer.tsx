import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { IStreamer } from "../interfaces";
import { getStreamer } from "../api/streamers";

const SingleStreamer = () => {
  const { id } = useParams();

  const { isLoading, isError, data, error } = useQuery<IStreamer, Error>(
    ["streamer", id],
    () => getStreamer(id),
    {
      enabled: !!id,
    }
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  return <div>{data?.name}</div>;
};

export default SingleStreamer;
