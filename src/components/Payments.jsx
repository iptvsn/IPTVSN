import { motion } from "framer-motion";
import orangeMoneyLogo from "../assets/orange_money.png";

function Payments() {
  return (
    <div className="w-full pt-4">
      <motion.div
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: -1080, opacity: 0 }}
        transition={{ duration: 1 }}
        className="w-full flex flex-col justify-center items-center"
      >
        <h1 className="text-center font-bold md:text-[1.5rem]">
          Payment Proccess
        </h1>
        <div className="w-[60px] h-[5px] bg-[#FFCC00] rounded-lg md:w-[120px] md:h-[5px]"></div>
      </motion.div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-row mt-5">
          <p className="text-center text-[1.2rem] w-full">
            Nous proposons le moyen le plus <b>facile</b> de paiement au Sénégal{" "}
            <b>en seulement 3 étapes</b>
          </p>
        </div>
        <div className=" w-full  mt-5 flex flex-col md:flex-row justify-center md:justify-evenly md:items-start">
          {/* STEP 1  */}
          <div className="mb-4 md:mb-0 flex flex-col items-center">
            <div className="w-[60px] h-[60px] border-gray-700 border-[2px] rounded-[50%] flex justify-center items-center">
              <div className="w-[40px] h-[40px] rounded-[50%] bg-green-800 flex justify-center items-center">
                <h1 className="text-white">1</h1>
              </div>
            </div>
            <p className="mt-1 text-center w-[200px]">
              choisissez l'abonnement IPTV qui vous convient mieux parmi nos
              options
            </p>
          </div>
          {/*  END STEP 1 */}
          <div className="flex mb-4 md:mb-0 flex-col items-center">
            <div className="w-[60px] h-[60px] border-gray-700 border-[2px] rounded-[50%] flex justify-center items-center">
              <div className="w-[40px] h-[40px] rounded-[50%] bg-yellow-500 flex justify-center items-center">
                <h1 className="text-white">2</h1>
              </div>
            </div>
            <p className="mt-1 text-center w-[200px]">
              Effectuez le transfert du montant correspondant à votre abonnement
              via <b>Orange</b>{" "}
              <span className="text-[#f46913] font-bold">Money</span>
            </p>
          </div>
          <div className="flex mb-4 md:mb-0 flex-col items-center">
            <div className="w-[60px] h-[60px] border-gray-700 border-[2px] rounded-[50%] flex justify-center items-center">
              <div className="w-[40px] h-[40px] rounded-[50%] bg-red-600 flex justify-center items-center">
                <h1 className="text-white">3</h1>
              </div>
            </div>
            <p className="mt-1 text-center w-[200px]">
              Veuillez nous envoyer la preuve de paiement via WhatsApp. Cela
              peuy etre une capture montarnt les details de transaction
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img
          className="w-[100px] bg-no-repeat object-cover"
          src={orangeMoneyLogo}
          alt=""
        />
        <p className="text-[0.8rem] md:text-[1.1rem] mt-2 text-red-700 font-bold text-center">
          Une fois que nous aurons recu votre preuve de paiment. nous activerons
          votre abonnement dans les 24 heures.
        </p>
        <p className="text-[0.8rem] w-[50%] md:text-[1.1rem] mt-2 text-black font-bold text-center">
          Nous vous remercions de votre confiance et sommes impatients de vous
          fournir un service IPTV de qualité. Si vous avez des questions
          supplémentaires,n'hesitez pas à nous contacter sur Whatsapp ou par
          E-mail
        </p>
      </div>
    </div>
  );
}

export default Payments;
