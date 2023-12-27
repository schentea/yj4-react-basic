const Layout = ({ children }) => {
  return (
    <div className="w-full h-[1000px] flex flex-col items-center justify-center">
      <div className="w-full h-[50%] flex items-center bg-black">
        <div className="w-[50%] h-[300px] ml-[230px]">
          <h1 className="font-bold text-3xl mb-[15px] text-white">Comics</h1>
          <p className="mb-[25px] text-white">
            "LONG SHADOW" Concludes! The battle for Wakanda comes to a head!
            T'Challa <br></br>has owned the path his secrets paved for the Hatut
            Zeraze's takeover
          </p>
          <div className="border border-[1px] w-[100px]  text-center">
            <p className="text-red-500 pl-[10px] pr-[10px]">LIST more</p>
          </div>
        </div>
        <div className="w-[70%] h-full ">
          <img
            src="https://images.unsplash.com/photo-1703002917693-e51692232c81?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="right"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="w-full h-[50%] flex jutify-center items-center bg-white">
        {children}
      </div>
    </div>
  );
};
export default Layout;
