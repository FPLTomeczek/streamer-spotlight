import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { IStreamer } from "../interfaces";
import { getStreamer } from "../api/streamers";
import Streamer from "../components/streamer-list/Streamer";
import Loading from "../components/Loading";
import Error from "../components/Error";

const SingleStreamerPage = () => {
  const { id } = useParams();

  const { isLoading, isError, data, error } = useQuery<IStreamer, Error>(
    ["streamer", { id: id }],
    () => getStreamer(id),
    {
      enabled: !!id,
    }
  );

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error msg={error.message} />;
  }

  if (data) {
    return <Streamer streamer={data} isSingle={true} />;
  }
};

export default SingleStreamerPage;
