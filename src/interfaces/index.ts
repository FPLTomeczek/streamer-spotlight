import { StreamerPlatform } from "../enums/streamerForm";

export interface IStreamer {
  _id: string;
  name: string;
  platform: StreamerPlatform;
  desc: string;
  upvotes: number;
  downvotes: number;
}
