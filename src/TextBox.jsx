const TextBox = (props) => {
  const { title, text1 } = props;
  return (
    <div className="w-[300px] h-[180px] mr-[20px] border-[1px]">
      <h1 className="text-2xl ml-[10px] mb-[20px] mt-[15px] font-bold">
        {title}
      </h1>
      <p className="text-sm ml-[10px] mb-[30px] ">{text1}</p>
      <div className="w-[100px] h-[30px] ml-[10px] border-[1px] rounded-xl text-center bg-gray-100 ">
        View here
      </div>
    </div>
  );
};

export default TextBox;
