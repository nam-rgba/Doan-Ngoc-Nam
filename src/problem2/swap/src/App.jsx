import Currency from "./components/Currency";
import exchange from './exchange.png';
import coins from './data.json'
import { useState } from "react";
function App() {
  const [source, setsource] = useState(coins[4])
  const [target, setTarget] = useState(coins[1])

  const [init, setInit] = useState(1)



  return (
    <div className="w-full h-screen bg-[#ffffff] text-[#006b8b]">
      <div className="w-full h-[10%] border-b-2 border-[#e7f4fd] bg-white">
        99 teach
      </div>
      <div className="w-full h-[90%] flex flex-row items-center justify-center ">
        <div className="w-[80%] h-[80%] bg-[#e7f4fd] rounded-xl flex flex-col justify-around border-[#006b8b] border-2">
          <div className="w-full h-[10%]  pl-12 pt-4">
            Swap
          </div>
          <div className="w-full h-80% flex flex-row items-center justify-around">
            <div className="w-[40%] ">
              <p className="w-full text-center">Amount</p>
              <Currency currency={source} 
              changeCurrency={setsource} 
              allCurrencies={coins} 
              isTarget={false}
              init={init}
              setInit={setInit}/>
            </div>
            <div className="w-[3rem] h-[3rem] bg-gray-200 rounded-full">
              <img src={exchange} alt="exchange" />
            </div>
            <div className="w-[40%] ">
              <p  className="w-full text-center">Converted amount</p>
              <Currency currency={target} 
              changeCurrency={setTarget}
               allCurrencies={coins}
                isTarget={true}
                init={init}
                setInit={setInit}/>
            </div>
          </div>
          <div>
            result
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
