import { useQuery, useMutation, useQueryClient } from "react-query";
import { IStreamer } from "../interfaces";
import { getStreamers, updateStreamer } from "../api/streamers";

const StreamerList = () => {
  const queryClient = useQueryClient();

  const { isLoading, isError, error, data } = useQuery<IStreamer[], Error>(
    "streamers",
    getStreamers
  );

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

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      {data?.map((streamer) => {
        return (
          <div key={streamer._id}>
            <p>Name: {streamer.name}</p>
            <p>platform: {streamer.platform}</p>
            <p>desc: {streamer.desc}</p>
            <p>upvotes: {streamer.upvotes}</p>
            <p>downvotes: {streamer.downvotes}</p>
            <button onClick={() => handleVote(streamer._id, "upvote")}>
              Upvote
            </button>
            <button onClick={() => handleVote(streamer._id, "downvote")}>
              Downvote
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default StreamerList;
