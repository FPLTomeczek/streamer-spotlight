import { URL } from "../constants";
import { IStreamer } from "../interfaces";

export const getStreamers = async () => {
  const res = await fetch(URL);
  const data = await res.json();

  return data;
};

export const getStreamer = async (id: string | undefined) => {
  if (typeof id === "string") {
    const res = await fetch(`${URL}/${id}`);
    const data = await res.json();

    if (res.ok) {
      return data;
    }
    throw new Error(data.msg);
  }
};

export const createStreamer = async (streamer: IStreamer) => {
  const res = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: streamer.name,
      platform: streamer.platform,
      desc: streamer.desc,
    }),
  });
  const data = await res.json();

  if (res.ok) {
    return data;
  }
  throw new Error(data.msg);
};

export const updateStreamerVote = async ({
  id,
  vote,
}: {
  id: string;
  vote: string;
}) => {
  const res = await fetch(`${URL}/${id}/vote`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      vote: vote,
    }),
  });
  const data = await res.json();

  if (res.ok) {
    return data;
  }
  throw new Error(data.msg);
};
