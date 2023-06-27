import Streamer from "../../components/streamer-list/Streamer";
import { IStreamer } from "../../interfaces";
import { StreamerListStyled } from "../../styles/StreamerList.styled";

const StreamerList = ({
  streamers,
}: {
  streamers: IStreamer[] | undefined;
}) => {
  return (
    <StreamerListStyled>
      {streamers?.map((streamer) => {
        return (
          <Streamer streamer={streamer} key={streamer._id} isSingle={false} />
        );
      })}
    </StreamerListStyled>
  );
};

export default StreamerList;
