import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { IStreamer } from "../interfaces";
import { getStreamer } from "../api/streamers";
import Streamer from "../components/streamer-list/Streamer";
import Loading from "../components/Loading";

const SingleStreamerPage = () => {
  const { id } = useParams();

  const { isLoading, isError, data, error } = useQuery<IStreamer, Error>(
    ["streamer", id],
    () => getStreamer(id),
    {
      enabled: !!id,
    }
  );

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  if (data) {
    return <Streamer streamer={data} isSingle={true} />;
  }
};

export default SingleStreamerPage;
