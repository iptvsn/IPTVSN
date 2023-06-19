import { motion } from "framer-motion";
import ChannelCard from "./ChannelCard";

function Channels() {
  const channelsList = [
    "https://upload.wikimedia.org/wikipedia/fr/thumb/5/51/Bein_sport_logo.svg/2560px-Bein_sport_logo.svg.png",
    "https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png",
    "https://upload.wikimedia.org/wikipedia/commons/f/fb/Cnn_logo_red_background.png?20150626194629",
    "https://yt3.googleusercontent.com/ytc/AGIKgqMIu7Qkz5kXoDII-tcdIxWCzXO-kmBAZa1Zqu31kg=s900-c-k-c0x00ffffff-no-rj",
    "https://logodownload.org/wp-content/uploads/2020/06/sky-sports-logo-0-1.png",
    "https://tvestatic.acan.group/dmedia/images/a0f72b50707b0788540844575b83f2bc.png",
    "https://seeklogo.com/images/D/disney-logo-9649A88458-seeklogo.com.png",
    "https://static.wikia.nocookie.net/logopedia/images/5/56/2sTV_Logo.png",
    "https://c8.alamy.com/zoomses/9/f7fd6b03f302463484b538b232545edc/kydxra.jpg",
    "https://logowik.com/content/uploads/images/rts-radio-television-suisse5165.jpg",
  ];
  return (
    <div className="w-full pt-4">
      <motion.div className="w-full">
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="text-center font-bold md:text-[1.5rem]">
            More than 17K Channels
          </h1>
          <div className="w-[60px] h-[5px] bg-[#FFCC00] rounded-lg md:w-[80px] md:h-[5px]"></div>
        </div>
        <div className="channel-slider-holder w-full flex items-center mt-4 overflow-hidden">
          <div className="channel-slider flex flex-row flex-nowrap">
            {channelsList.map((channel, index) => (
              <div key={index}>
                <ChannelCard imageUrl={channel} />
              </div>
            ))}
          </div>
          <div className="channel-slider flex flex-row flex-nowrap">
            {channelsList.map((channel, index) => (
              <div key={index}>
                <ChannelCard imageUrl={channel} />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Channels;
