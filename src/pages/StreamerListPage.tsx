import StreamerList from "../components/streamer-list/StreamerList";
import { useState, useEffect } from "react";
import UpdateListPage from "../components/streamer-list/UpdateListPage";
import { STREAMERS_PER_PAGE } from "../constants";
import { getStreamers } from "../api/streamers";
import { useQuery } from "react-query";
import { IStreamer } from "../interfaces";
import Loading from "../components/Loading";

const StreamerListPage = () => {
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
      <UpdateListPage page={page} setPage={setPage} maxPage={maxPage} />
      <StreamerList streamers={streamersOnPage} />
    </>
  );
};

export default StreamerListPage;
