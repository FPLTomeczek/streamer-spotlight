import { StreamerPlatform } from "../enums/form";

export interface IStreamer {
  _id: string;
  name: string;
  platform: StreamerPlatform;
  desc: string;
  upvotes: number;
  downvotes: number;
}
