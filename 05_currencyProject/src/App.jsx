import bgIMage from "./assets/chart_img.jpg";

import "./App.css";

function App() {
  return (
    <>
      <div className="w-screen h-screen font-mono flex justify-center items-center relative ">
        <img
          src={bgIMage}
          class="absolute opacity-80 inset-0 w-full h-full object-cover z-[1]"
        />
        <div className=" z-[999] bg-white/50 backdrop-blur-sm w-[460px] h-[400px] rounded-lg flex flex-col justify-center px-5 relative shadow-xl">
          <h3
            className="text-[1.3rem] text-center inline-block
          uppercase font-[Arial] font-bold text-[#36415A]"
          >
            Currency Converter
          </h3>
          <div className="h-fit px-3 py-6 mb-3 bg-white rounded-md border-[2px] border-solid border-[#005A9C]">
            <div className="flex justify-between opacity-50 ">
              <h4 className="inline-block">From</h4>
              <h4 className="inline-block">Currency Type</h4>
            </div>
            <div className="flex justify-between mt-3">
              <h4 className="inline-block">0</h4>
              <select name="" id="">
                <option value="">Select</option>
                <option value="usd">USD</option>
              </select>
            </div>
          </div>

          {/* center->  absolute inset-0 z-[999] flex items-center justify-center */}
          <div className="absolute inset-0 top-[38.5%] left-[40%]">
            <button className="outline-none bg-[#005A9C] text-white px-7 py-3 text-center font-bold rounded-md shadow-xl ">
              Swap
            </button>
          </div>

          <div className="h-fit px-3 py-6 mt-3 bg-white rounded-md border-[2px] border-solid border-[#005A9C]">
            <div className="flex justify-between opacity-50 ">
              <h4 className="inline-block">From</h4>
              <h4 className="inline-block">Currency Type</h4>
            </div>
            <div className="flex justify-between mt-3">
              <h4 className="inline-block">0</h4>
              <select name="" id="">
                <option value="">Select</option>
                <option value="usd">USD</option>
              </select>
            </div>
          </div>

          <div className="flex items-center justify-center mt-3">
            <button className="outline-none w-full border-white  bg-[#005A9C] text-white px-7 py-3 text-center font-bold rounded-md shadow-xl mt-4">
              Convert {} to {}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
