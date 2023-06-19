import { AiOutlineCheckCircle } from "react-icons/ai";

function PricingCard(props) {
  return (
    <div className="flex flex-col justify-evenly text-white items-center p-5 h-[320px] w-[250px] md:h-[480px] md:w-[320px] bg-[#333333] mx-2 my-2 rounded-xl shadow-md border-[0.3rem] border-[#FFCC00] duration-700 cursor-pointer ease-in-out hover:scale-[1.04]">
      <p className="text-[1rem] md:text-3xl font-bold">{props.period}</p>
      <div className="text-[0.8rem] md:text-2xl font-bold">
        <p>{props.discountPrice} FCFA </p>
        <p>
          <del>{props.normalPrice} </del>
          FCFA
        </p>
      </div>
      {/*  LIST  */}
      <div className="text-start">
        <div className="md:text-[1.1rem] text-[0.8rem] flex flex-row items-center">
          <AiOutlineCheckCircle color="white" />
          <p className="ml-2">Up TO 17600 Live Channels</p>
        </div>
        <div className="md:text-[1.1rem] text-[0.8rem] flex flex-row items-center">
          <AiOutlineCheckCircle color="white" />
          <p className="ml-2">Full SD/HD/4K</p>
        </div>
        <div className="md:text-[1.1rem] text-[0.8rem] flex flex-row items-center">
          <AiOutlineCheckCircle color="white" />
          <p className="ml-2">Movies & Show included</p>
        </div>
        <div className="md:text-[1.1rem] text-[0.8rem] flex flex-row items-center">
          <AiOutlineCheckCircle color="white" />
          <p className="ml-2">Fast Delivery</p>
        </div>
        <div className="md:text-[1.1rem] text-[0.8rem] flex flex-row items-center">
          <AiOutlineCheckCircle color="white" />
          <p className="ml-2">All international Channels</p>
        </div>
        <div className="md:text-[1.1rem] text-[0.8rem] flex flex-row items-center">
          <AiOutlineCheckCircle color="white" />
          <p className="ml-2">24/7 Technical Support</p>
        </div>
      </div>
      {/* END LIST  */}

      <button
        onClick={() => {
          window.open(
            `https://wa.me/+212667256799?text=Request iptv subscription for ${props.period}`,
            "_blank"
          );
        }}
        className="w-[80px] h-[35px] font-sans font-bold bg-[#F2E416] text-black rounded-md"
      >
        Buy now
      </button>
    </div>
  );
}

export default PricingCard;
