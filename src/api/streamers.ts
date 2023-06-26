import { URL } from "../constants";

export const createStreamer = async () => {
  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "Demonzz",
      platform: "Twitch",
      desc: "Amrah detonuj",
    }),
  });

  return response.json();
};

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
