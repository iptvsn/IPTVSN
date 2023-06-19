import React from "react";

function ChannelCard(props) {
  return (
    <div className="channel mx-2 my-2 w-[120px] h-[70px] md:w-[150px] md:h-[90px] lg:w-[180px] lg:h-[100px] object-cover">
      <img className="w-full h-full object-cover" src={props.imageUrl} alt="" />
    </div>
  );
}

export default ChannelCard;
