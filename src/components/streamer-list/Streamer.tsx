import { updateStreamerVote } from "../../api/streamers";
import { IStreamer } from "../../interfaces";
import { useMutation, useQueryClient } from "react-query";
import streamerImg from "../../assets/images/mammon.jpg";
import PlatformIcon from "../PlatformIcon";
import { StreamerStyled } from "../../styles/StreamerList.styled";
import { Link } from "react-router-dom";
import { Votes } from "../../enums/streamerList";
import { Toast } from "../../enums/streamerForm";
import { displayToast } from "../utils";

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

  const { _id: id, name, platform, upvote, downvote, desc } = streamer;

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
      onError: (err) => {
        displayToast({ msg: err.message, type: Toast.ERROR });
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
          <img
            src={streamerImg}
            alt="streamer"
            className="streamer-img"
            onLoad={loadImage}
          />
        </Link>
      ) : (
        <img
          src={streamerImg}
          alt="streamer"
          className="streamer-img"
          onLoad={loadImage}
        />
      )}
      <div className="streamer-header">
        <h2>{name}</h2>
        <PlatformIcon platform={platform} />
      </div>
      <div className="underline"></div>
      <div className="votes">
        <div className="upvotes">
          <button
            onClick={() => handleVote(id, Votes.UPVOTE)}
            aria-label="upvote streamer"
          >
            <i className="fa-regular fa-square-caret-up"></i>
          </button>
          <p>{upvote}</p>
        </div>
        <div className="downvotes">
          <button onClick={() => handleVote(id, Votes.DOWNVOTE)}>
            <i className="fa-regular fa-square-caret-down"></i>
          </button>
          <p>{downvote}</p>
        </div>
      </div>
      {isSingle ? <p>{desc}</p> : null}
    </StreamerStyled>
  );
};

export default Streamer;
