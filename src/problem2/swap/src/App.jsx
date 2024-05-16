import Currency from "./components/Currency";
import coins from './data/data.json'
import { useState } from "react";
import './index.css'
import { CgArrowsExchange } from "react-icons/cg";
function App() {
  const [source, setsource] = useState(coins[4])
  const [target, setTarget] = useState(coins[1])

  const [init, setInit] = useState(1)
  console.log(init)



  return (
    <div className="w-full h-screen bg-[#ffffff] text-[#006b8b]">
      <div className="w-full h-[10%] border-b-2 border-[#e7f4fd] bg-white flex flex-row items-center pl-12">
        <div className="w-1/6 h-full text-[#0db2e4] font-bold text-2xl flex items-center">
              <div className="neonText ">
                99 TECHANCE
              </div>
        </div>
      </div>
      <div className="w-full h-[90%] flex flex-row items-center justify-center ">
        <div className="w-[80%] max-[400px]:w-[96%] h-[80%] bg-[#e7f4fd] rounded-xl flex flex-col justify-start border-[#006b8b] border-2">
          <div className="w-full h-[10%]  pl-8 pt-4 text-xl font-bold mb-8">
            Swapper by Nam
          </div>
          <div className="w-full  flex flex-row items-center justify-around max-[700px]:flex-col">
            <div className="w-[40%] max-[700px]:w-[90%]">
              <p className="w-full text-left mb-2">Amount</p>
              <Currency currency={source} 
              changeCurrency={setsource} 
              allCurrencies={coins} 
              isTarget={false}
              init={init}
              setInit={setInit}/>
            </div>
            <div className="w-[3rem] h-[3rem] bg-[#ffffff] rounded-full flex flex-row items-center justify-center">
              <CgArrowsExchange size={40} color="#006b8b"/>
            </div>
            <div className="w-[40%] max-[700px]:w-[90%]">
              <p  className="w-full text-left mb-2">Converted amount</p>
              <Currency currency={target} 
              changeCurrency={setTarget}
               allCurrencies={coins}
                isTarget={true}
                init={init}
                setInit={setInit}/>
            </div>
          </div>
          <div className="p-8 mt-12">
            <h3 className="font-bold text-xl">Usage:</h3>
            <p>Click to amount to access and edit it</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
