import Streamer from "../streamer-item/Streamer";
import { IStreamer } from "../interfaces";
import { StreamerListStyled } from "../../../styles/streamers/StreamerList.styled";

const StreamerList = ({
  streamers,
  loadImage,
}: {
  streamers: IStreamer[] | undefined;
  loadImage: () => void;
}) => {
  return (
    <StreamerListStyled>
      {streamers?.map((streamer) => {
        return (
          <Streamer
            streamer={streamer}
            key={streamer._id}
            isSingle={false}
            loadImage={loadImage}
          />
        );
      })}
    </StreamerListStyled>
  );
};

export default StreamerList;
