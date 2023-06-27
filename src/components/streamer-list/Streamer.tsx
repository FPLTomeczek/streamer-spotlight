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
}: {
  streamer: IStreamer;
  isSingle: boolean;
}) => {
  const queryClient = useQueryClient();

  const { _id, name, platform, upvotes, downvotes, desc } = streamer;

  const mutation = useMutation<IStreamer, Error, { id: string; vote: string }>(
    updateStreamerVote,
    {
      onSuccess: (data) => {
        queryClient.setQueryData(["streamer", { id: _id }], data);
      },
    }
  );

  const handleVote = (id: string, vote: string) => {
    mutation.mutate({ id, vote });
  };

  return (
    <StreamerStyled isSingle={isSingle}>
      {!isSingle ? (
        <Link to={`/streamers/${_id}`}>
          <img src={streamerImg} alt="streamer" />
        </Link>
      ) : (
        <img src={streamerImg} alt="streamer" />
      )}
      <div className="streamer-header">
        <h2>{name}</h2>
        <PlatformIcon platform={platform} />
      </div>
      <div className="votes">
        <div className="upvotes">
          <button
            onClick={() => handleVote(_id, "upvote")}
            aria-label="upvote streamer"
          >
            <i className="fa-regular fa-square-caret-up"></i>
          </button>
          <p>{upvotes}</p>
        </div>
        <div className="downvotes">
          <button onClick={() => handleVote(_id, "downvote")}>
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
