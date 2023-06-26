import { StreamerPlatform } from "../enums/form";

export interface IStreamer {
  name: string;
  platform: StreamerPlatform;
  desc: string;
}
