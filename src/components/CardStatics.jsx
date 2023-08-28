

const CardStatics = ({img, title, text, mt  }) => {
  return (
    <div  className={`bg-white shadow-lg relative flex flex-col rounded-lg items-center lg:w-[330px] lg:h-[260px] z-[1] lg:mt-${mt} `}>
      <div className="w-20 h-20 bg-primary-dark-violet rounded-full flex items-center justify-center -mt-10 ">
        <img src={img} alt="" className="w-10"/>
      </div>
      <div className="w-4/5 grid grid-cols-1 place-items-center my-9 gap-4 lg:place-items-start">
        <h3 className="text-lg font-bold text-left">{title}</h3>
        <p className="text-center text-sm text-neutral-gray font-bold leading-6 lg:text-left">
          {text}
        </p>
      </div>
    </div>
  );
};

export default CardStatics;
