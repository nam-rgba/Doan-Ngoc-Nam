import React, { useState } from "react";
import { CgArrowsExchange } from "react-icons/cg";
import { IoIosClose } from "react-icons/io";
import { useDropdown } from "./hooks/useDropdown";
import Currency from "./components/Currency";
import coins from './data/data.json';
import { MdOutlineDoneAll } from "react-icons/md";
import { motion } from "framer-motion"
import './index.css';

function App() {
  const [source, setSource] = useState(coins[4]);
  const [target, setTarget] = useState(coins[1]);
  const [init, setInit] = useState(1);
  const [isOpen, dropdownRef, toggleDropdown] = useDropdown(false);

  console.log(init);

  return (
    <div className="w-full h-screen bg-[#ffffff] text-[#006b8b] relative">
      <div className={`w-full h-[10%] border-b-2 border-[#e7f4fd] bg-white flex flex-row items-center pl-12 ${isOpen ? 'blurred' : ''}`}>
        <div className="w-1/6 h-full text-[#0db2e4] font-bold text-2xl flex items-center">
          <div className="neonText">
            99 TECHANCE
          </div>
        </div>
      </div>
      <div className={`w-full h-[90%] flex flex-row items-center justify-center ${isOpen ? 'blurred' : ''}`}>
        <div className="w-[80%] max-[400px]:w-[96%] h-[80%] bg-[#e7f4fd] rounded-xl flex flex-col justify-start border-[#006b8b] border-2">
          <div className="w-full h-[10%] pl-8 pt-4 text-xl font-bold mb-8">
            Swapper by Nam
          </div>
          <div className="w-full flex flex-row items-center justify-around max-[700px]:flex-col">
            <div className="w-[40%] max-[700px]:w-[90%]">
              <p className="w-full text-left mb-2">Amount</p>
              <Currency
                currency={source}
                changeCurrency={setSource}
                allCurrencies={coins}
                isTarget={false}
                init={init}
                setInit={setInit}
              />
            </div>
            <div className="w-[3rem] h-[3rem] bg-[#ffffff] rounded-full flex flex-row items-center justify-center">
              <CgArrowsExchange size={40} color="#006b8b" />
            </div>
            <div className="w-[40%] max-[700px]:w-[90%]">
              <p className="w-full text-left mb-2">Converted amount</p>
              <Currency
                currency={target}
                changeCurrency={setTarget}
                allCurrencies={coins}
                isTarget={true}
                init={init}
                setInit={setInit}
              />
            </div>
          </div>
          <div className="w-full h-[5rem] flex flex-row items-center justify-center mt-8">
            <button onClick={toggleDropdown}
              className="p-6 w-[30%] max-[400px]:w-[50%] h-[2rem] text-white bg-[#0db2e4] rounded-md flex flex-row items-center justify-center font-bold hover:bg-[#3d90ae] transition-colors">
              Confirm swap
            </button>
          </div>
          <div className="p-8 mt-12">
            <h3 className="font-bold text-xl">Usage:</h3>
            <p>Click to amount to access and edit it</p>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="absolute w-[30%] max-[400px]:w-[90%]  h-[50%] top-[35%] left-[35%] max-[400px]:left-[5%] bg-white rounded-lg">
          <div className="w-full h-[5%] flex flex-row items-center justify-end p-4 cursor-pointer" ref={dropdownRef}>
            <IoIosClose size={28} onClick={toggleDropdown} />
          </div>
          <div className=" flex flex-col w-full h-[75%] items-center justify-around">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
              <MdOutlineDoneAll size={40} color="#006b8b" />
            </motion.div>
            Swapped successfully!
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
