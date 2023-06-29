import { updateStreamerVote } from "../../api/streamers";
import { IStreamer } from "../../interfaces";
import { useMutation, useQueryClient } from "react-query";
import streamerImg from "../../assets/images/mammon.jpg";
import PlatformIcon from "../PlatformIcon";
import { StreamerStyled } from "../../styles/StreamerList.styled";
import { Link } from "react-router-dom";

const Streamer = ({
  streamer,
  isSingle,
  loadImage,
}: {
  streamer: IStreamer;
  isSingle: boolean;
  loadImage: () => void;
}) => {
  const queryClient = useQueryClient();

  const { _id: id, name, platform, upvotes, downvotes, desc } = streamer;

  const mutation = useMutation<IStreamer, Error, { id: string; vote: string }>(
    updateStreamerVote,
    {
      onSuccess: (data) => {
        if (isSingle) {
          queryClient.setQueryData(["streamer", { id: id }], data);
        } else {
          queryClient.invalidateQueries("streamers");
        }
      },
    }
  );

  const handleVote = (id: string, vote: string) => {
    mutation.mutate({ id, vote });
  };

  return (
    <StreamerStyled isSingle={isSingle}>
      {!isSingle ? (
        <Link to={`/streamers/${id}`}>
          <img src={streamerImg} alt="streamer" onLoad={loadImage} />
        </Link>
      ) : (
        <img src={streamerImg} alt="streamer" onLoad={loadImage} />
      )}
      <div className="streamer-header">
        <h2>{name}</h2>
        <PlatformIcon platform={platform} />
      </div>
      <div className="votes">
        <div className="upvotes">
          <button
            onClick={() => handleVote(id, "upvote")}
            aria-label="upvote streamer"
          >
            <i className="fa-regular fa-square-caret-up"></i>
          </button>
          <p>{upvotes}</p>
        </div>
        <div className="downvotes">
          <button onClick={() => handleVote(id, "downvote")}>
            <i className="fa-regular fa-square-caret-down"></i>
          </button>
          <p>{downvotes}</p>
        </div>
      </div>
      {isSingle ? <p>{desc}</p> : null}
    </StreamerStyled>
  );
};

export default Streamer;
