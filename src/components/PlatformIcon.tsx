import { StreamerPlatform } from "../enums/platform";

const PlatformIcon = ({ platform }: { platform: StreamerPlatform }) => {
  switch (platform) {
    case StreamerPlatform.TWITCH:
      return <i className="fa-brands fa-twitch"></i>;
    case StreamerPlatform.YOUTUBE:
      return <i className="fa-brands fa-youtube"></i>;
    case StreamerPlatform.TIKTOK:
      return <i className="fa-brands fa-tiktok"></i>;
    case StreamerPlatform.KICK:
      return <i className="fa-brands fa-kickstarter"></i>;
    case StreamerPlatform.RUMBLE:
      return <i className="fa-solid fa-r"></i>;
    default:
      return <i className="fa-regular fa-circle"></i>;
  }
};

export default PlatformIcon;
