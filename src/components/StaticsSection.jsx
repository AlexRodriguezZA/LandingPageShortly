import CardStatics from "./CardStatics";
import CardLink from "./CardLink";
import Card_img1 from "../assets/icons/icon-brand-recognition.svg";
import Card_img2 from "../assets/icons/icon-detailed-records.svg";
import Card_img3 from "../assets/icons/icon-fully-customizable.svg";

const infoCard1 = {
  title: "Brand Recognition",
  text: "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content",
};

const infoCard2 = {
  title: "Detailed Records",
  text: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
};

const infoCard3 = {
  title: "Fully Customizable",
  text: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
};

const StaticsSection = ({ Links }) => {
  return (
    <section className="w-full bg-neutral-100 flex flex-col items-center">
      <div className="w-11/12 flex flex-col items-center  max-w-screen-xl">
        {Links &&
          Links.map((link) => <CardLink LinkObject={link} key={link.short} />)}
      </div>

      <div className="w-10/12 mt-16 lg:mt-20 flex flex-col items-center  max-w-screen-xl">
        <h2 className="text-center text-2xl font-bold text-neutral-very-dark-blue mt-10 md:text-3xl">
          Advanced Statistics
        </h2>
        <p className="text-center text-neutral-grayish-violet font-bold text-sm mt-5 leading-6 md:text-sm md:text-center md:w-1/2">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>

      <div className="w-10/12 mt-20 grid grid-cols-1 place-items-center gap-20 mb-20 md:mt-30 lg:grid-cols-3 lg:gap-x-10 lg:mt-4 max-w-screen-xl">
        <div className="bg-cyan-300 z-0 mx-auto absolute h-[500px] w-2 lg:w-9/12 lg:h-2 max-w-[900px]"></div>
        <CardStatics
          img={Card_img1}
          title={infoCard1.title}
          text={infoCard1.text}
        />
        <CardStatics
          img={Card_img2}
          title={infoCard2.title}
          text={infoCard2.text}
          mt={20}
        />
        <CardStatics
          img={Card_img3}
          title={infoCard3.title}
          text={infoCard3.text}
          mt={40}
        />
      </div>
    </section>
  );
};

export default StaticsSection;
