import bgIMage from "./assets/chart_img.jpg";

import "./App.css";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrency";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState();
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("npr");
  const [convertedAmt, setConvertedAmt] = useState();

  const currencyInfo = useCurrencyInfo(from) || {};
  const options = Object.keys(currencyInfo); // holds all the object keys

  // swap two variables

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmt(amount);
    setAmount(convertedAmt);
  };

  const convert = () => {
    setConvertedAmt(amount * currencyInfo[to]);
  };

  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${bgIMage})`,
        }}
      >
        <div className="w-full ">
          <div className="w-full h-[300px] max-w-md mx-auto border-none rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <div className="mb-0.5 text-white font-bold font-[Arial] text-center">
              Currency Converter
            </div>
            <form
              action=""
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              <div className="w-full mb-1">
                <InputBox
                  label="From"
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={setFrom}
                  selectCurrency={from}
                  onAmountChange={setAmount}
                />
              </div>

              <div className="relative w-full h-0.5">
                <button
                  onClick={swap}
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-none rounded-md bg-[#005A9C] text-white px-2 py-0.5"
                >
                  SWAP
                </button>
              </div>
              <div className="w-full mb-1">
                <InputBox
                  label="To"
                  amount={convertedAmt}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  amountDisable
                  selectCurrency={to}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="submit"
                  className="w-full bg-[#005A9C] mt-3 text-white px-4 py-3 rounded-lg"
                >
                  Convert {from.toUpperCase()} to {to.toUpperCase()}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>

    // <>
    //   <div className="w-screen h-screen font-mono flex justify-center items-center relative ">
    //     <img
    //       src={bgIMage}
    //       class="absolute opacity-80 inset-0 w-full h-full object-cover z-[1]"
    //     />
    //     <div className=" z-[999] bg-white/50 backdrop-blur-sm w-[460px] h-[400px] rounded-lg flex flex-col justify-center px-5 relative shadow-xl">
    //       <h3
    //         className="text-[1.3rem] text-center inline-block
    //       uppercase font-[Arial] font-bold text-[#36415A]"
    //       >
    //         Currency Converter
    //       </h3>
    //       <div className="h-fit px-3 py-6 mb-3 bg-white rounded-md border-[2px] border-solid border-[#005A9C]">
    //         <div className="flex justify-between opacity-50 ">
    //           <h4 className="inline-block">From</h4>
    //           <h4 className="inline-block">Currency Type</h4>
    //         </div>
    //         <div className="flex justify-between mt-3">
    //           <h4 className="inline-block">0</h4>
    //           <select name="" id="">
    //             <option value="">Select</option>
    //             <option value="usd">USD</option>
    //           </select>
    //         </div>
    //       </div>

    //       {/* center->  absolute inset-0 z-[999] flex items-center justify-center */}
    //       <div className="absolute inset-0 top-[38.5%] left-[40%]">
    //         <button className="outline-none bg-[#005A9C] text-white px-7 py-3 text-center font-bold rounded-md shadow-xl ">
    //           Swap
    //         </button>
    //       </div>

    //       <div className="h-fit px-3 py-6 mt-3 bg-white rounded-md border-[2px] border-solid border-[#005A9C]">
    //         <div className="flex justify-between opacity-50 ">
    //           <h4 className="inline-block">From</h4>
    //           <h4 className="inline-block">Currency Type</h4>
    //         </div>
    //         <div className="flex justify-between mt-3">
    //           <h4 className="inline-block">0</h4>
    //           <select name="" id="">
    //             <option value="">Select</option>
    //             <option value="usd">USD</option>
    //           </select>
    //         </div>
    //       </div>

    //       <div className="flex items-center justify-center mt-3">
    //         <button className="outline-none w-full border-white  bg-[#005A9C] text-white px-7 py-3 text-center font-bold rounded-md shadow-xl mt-4">
    //           Convert {} to {}
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </>
  );
}

export default App;
