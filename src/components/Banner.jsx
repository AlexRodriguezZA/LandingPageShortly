import bgDesktop from "../assets/images/bg-boost-desktop.svg";
import Button from "./Button";

const Banner = () => {
  const bannerBGStyle = {
    backgroundImage: `url(${bgDesktop})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="w-full bg-primary-dark-violet flex flex-col items-center justify-center h-72 md:h-56" style={bannerBGStyle}>
      <p className="text-2xl font-bold text-white md:text-3xl mb-4">
        Boost your links today
      </p>
      <Button margin_top={4}/>
     
    </div>
  );
};

export default Banner;
