import StreamerList from "./StreamerList";
import { useState, useEffect, useRef } from "react";
import ButttonsListPage from "../../../components/buttons/ButtonsListPage";
import { STREAMERS_PER_PAGE } from "../constants";
import { getStreamers } from "../services/streamers";
import { useQuery } from "react-query";
import { IStreamer } from "../interfaces";
import Loading from "../../../components/Loading";
import { StreamerListContainerStyled } from "../../../styles/streamers/StreamerList.styled";

const StreamerListContainer = () => {
  const [page, setPage] = useState(1);
  const [isStreamerImagesLoading, setisStreamerImagesLoading] = useState(true);

  const streamerImagesLoaded = useRef(0);

  const [streamersOnPage, setStreamersOnPage] = useState<IStreamer[]>([]);

  const loadImage = () => {
    streamerImagesLoaded.current += 1;

    if (streamerImagesLoaded.current === streamersOnPage.length) {
      setisStreamerImagesLoading(false);
      streamerImagesLoaded.current = 0;
    }
  };

  const {
    isLoading: isStreamersLoading,
    isError,
    error,
    data,
  } = useQuery<IStreamer[], Error>("streamers", getStreamers);

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

  if (isStreamersLoading) {
    return <Loading />;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      <StreamerListContainerStyled isImagesLoading={isStreamerImagesLoading}>
        <ButttonsListPage page={page} setPage={setPage} maxPage={maxPage} />
        <StreamerList streamers={streamersOnPage} loadImage={loadImage} />
      </StreamerListContainerStyled>
      {isStreamerImagesLoading ? <Loading /> : null}
    </>
  );
};

export default StreamerListContainer;
