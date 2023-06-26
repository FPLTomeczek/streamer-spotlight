import styled from "styled-components";
import { updateStreamer } from "../../api/streamers";
import { IStreamer } from "../../interfaces";
import { useMutation, useQueryClient } from "react-query";
import streamerImg from "../../assets/images/mammon.jpg";
import PlatformIcon from "../PlatformIcon";

const Streamer = ({ streamer }: { streamer: IStreamer }) => {
  const queryClient = useQueryClient();

  const { _id, name, platform, upvotes, downvotes, desc } = streamer;

  const mutation = useMutation<IStreamer, Error, { id: string; vote: string }>(
    updateStreamer,
    {
      onSuccess: () => {
        queryClient.invalidateQueries("streamers");
      },
    }
  );

  const handleVote = (id: string, vote: string) => {
    mutation.mutate({ id, vote });
  };

  return (
    <StreamerStyled>
      <img src={streamerImg} alt="streamer" />
      <h2>{name}</h2>
      <PlatformIcon platform={platform} />
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
      <p>{desc}</p>
    </StreamerStyled>
  );
};

const StreamerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .votes {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
  .upvotes,
  .downvotes {
    display: flex;
    gap: 0.25rem;
  }
  .votes i {
    font-size: 2rem;
  }
  .upvotes i {
    color: green;
  }
  .downvotes i {
    color: red;
  }
`;
export default Streamer;
