export function Myproject() {
  return (
    <div className="flex items-center flex-col h-[80vh] gap-4 bg-[#ffffffb8]">
      <h2 className="mt-[100px] text-4xl font-extrabold">MY <span className="text-[#FFE01B]">PROJECT</span></h2>
      <div className="w-[50%] h-[70%] rounded-3xl drop-shadow-2xl flex gap-2 justify-center items-center">
        <span className="w-[280px] h-[380px] flex flex-col items-center">
          <a href="https://loglife.guru/" target="_blank" className="dropCSD drop-shadow-3xl">
            <img
              src="../../public/img/LOGLIFE.png"
              alt="loglife website"
              className=" rounded-t-lg"
            />
            <p className="py-4 px-[1px] text-md font-semibold bg-white  rounded-b-lg border-t-2">
              Web appication for activity tracking
            </p>
          </a>
        </span>
      </div>
    </div>
  );
}