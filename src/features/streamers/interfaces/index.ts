import { StreamerPlatform } from "../../../enums/platform";

export interface IStreamer {
  _id: string;
  name: string;
  platform: StreamerPlatform;
  desc: string;
  upvote: number;
  downvote: number;
}
