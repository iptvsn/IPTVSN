import { useState } from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { motion } from "framer-motion";

function FaqCard(props) {
  const [open, setOpen] = useState(false);

  const closeClass =
    "w-[50%] h-[40px] border-[2px] border-gray-600 flex flex-row justify-between items-center px-3 mb-3";

  const openClasse =
    "w-[50%] h-[40px] border-[2px] border-gray-600 flex flex-row justify-between items-center px-3";

  const onDropDownClicked = (e) => {
    setOpen(!open);
  };

  return (
    <div
      onClick={onDropDownClicked}
      className="flex flex-col w-full items-center"
    >
      <div className={open ? openClasse : closeClass}>
        <p>{props.title}</p>
        {open ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}
      </div>
      {open ? (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="text-start ease-in-out duration-500 w-[50%]"
        >
          {props.text}
        </motion.p>
      ) : (
        <div> </div>
      )}
    </div>
  );
}

export default FaqCard;
