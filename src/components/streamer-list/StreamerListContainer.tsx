import StreamerList from "./StreamerList";
import { useState, useEffect } from "react";
import ButttonsListPage from "./ButtonsListPage";
import { STREAMERS_PER_PAGE } from "../../constants";
import { getStreamers } from "../../api/streamers";
import { useQuery } from "react-query";
import { IStreamer } from "../../interfaces";
import Loading from "../Loading";

const StreamerListContainer = () => {
  const [page, setPage] = useState(1);
  const [streamersOnPage, setStreamersOnPage] = useState<IStreamer[]>([]);

  const { isLoading, isError, error, data } = useQuery<IStreamer[], Error>(
    "streamers",
    getStreamers
  );

  useEffect(() => {
    const streamers = data?.slice(
      (page - 1) * STREAMERS_PER_PAGE,
      (page - 1) * STREAMERS_PER_PAGE + STREAMERS_PER_PAGE
    );
    if (typeof streamers !== "undefined") {
      setStreamersOnPage(streamers);
    }
  }, [data, page]);

  const maxPage =
    typeof data?.length !== "undefined"
      ? Math.ceil(data?.length / STREAMERS_PER_PAGE)
      : 0;

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      <ButttonsListPage page={page} setPage={setPage} maxPage={maxPage} />
      <StreamerList streamers={streamersOnPage} />
    </>
  );
};

export default StreamerListContainer;
