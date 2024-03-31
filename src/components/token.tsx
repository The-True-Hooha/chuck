export default function Token() {
  return (
    <div className="bg-[#5BA7FF] px-4 font-pixelifySans pt-10 pb-10">
      <h1 className="text-center  font-upheavtt text-4xl text-">
        TOKEN SUPPLY
      </h1>
      <p className="text-center font-upheavtt text-3xl"> 1,000,000,000</p>

      <div className="pt-14 px-2 flex flex-wrap sm:gap-14 justify-start sm:justify-center">
        <div className="flex  justify-between gap-10 mb-10 items-center">
          <div className="circle circle-1"></div>
          <div className="text-xl md:text-2xl flex-1 font-bold">70% Lp</div>
        </div>
        <div className="flex justify-between gap-10 mb-10   items-center">
          <div className="circle circle-2 "></div>
          <div className="text-xl md:text-2xl flex-1 font-bold">
            15% <br /> Development
          </div>
        </div>
        <div className="flex justify-between gap-10 mb-10 items-center">
          <div className="circle circle-3"></div>
          <div className="text-xl md:text-2xl flex-1 font-bold">
            7.5% <br /> AirDrop
          </div>
        </div>
        <div className="flex justify-between gap-10 mb-10 items-center">
          <div className="circle circle-4"></div>
          <div className="text-xl md:text-2xl flex-1 font-bold">
            7.5% <br /> Marketing
          </div>
        </div>
        {/* <div className="flex justify-evenly items-center">
          <div className="circle"></div>
          <div className="text-3xl font-bold">70% Lp</div>
        </div> */}
      </div>
    </div>
  );
}

// 70% Lp
// 15% Development
// 7.5% AirDrop
// 7.5.% Marketing
