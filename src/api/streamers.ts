import { URL } from "../constants";
import { IStreamer } from "../interfaces";

export const getStreamers = async () => {
  const res = await fetch(URL);
  return res.json();
};

export const getStreamer = async (id: string | undefined) => {
  if (typeof id === "string") {
    const res = await fetch(`${URL}/${id}`);
    console.log(res);

    return res.json();
  }
  throw new Error("invalid id");
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

  if (res.ok) {
    return res.json();
  }

  throw new Error("User not created");
};

export const updateStreamer = async ({
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
  if (res.ok) {
    return res.json();
  }

  throw new Error("User Not updated");
};
