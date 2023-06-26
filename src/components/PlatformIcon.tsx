import { StreamerPlatform } from "../enums/form";

const PlatformIcon = ({ platform }: { platform: StreamerPlatform }) => {
  switch (platform) {
    case "twitch":
      return <i className="fa-brands fa-twitch"></i>;
    case "youtube":
      return <i className="fa-brands fa-youtube"></i>;
    case "tiktok":
      return <i className="fa-brands fa-tiktok"></i>;
    case "kick":
      return <i className="fa-brands fa-kickstarter"></i>;
    case "rumble":
      return <i className="fa-solid fa-r"></i>;
    default:
      return <i className="fa-regular fa-circle"></i>;
  }
};

export default PlatformIcon;
