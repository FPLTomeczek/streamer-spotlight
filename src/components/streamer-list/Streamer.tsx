import { updateStreamerVote } from "../../api/streamers";
import { IStreamer } from "../../interfaces";
import { useMutation, useQueryClient } from "react-query";
import streamerImg from "../../assets/images/mammon.jpg";
import PlatformIcon from "../PlatformIcon";
import { StreamerStyled } from "../../styles/StreamerList.styled";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Votes } from "../../enums/streamerList";

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
        toast.error(err.message, {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
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
