import HeaderImagen from "../assets/images/illustration-working.svg";

import Button from "./Button";

const Header = () => {
  return (
    <header className="mt-5 mb-20 lg:mb-32 w-full max-w-screen-xl flex flex-col items-center md:mt-20 md:flex-row-reverse md:w-10/12 md:gap-10">
      <section className=" w-11/12 h-80 flex justify-center items-center md:h-96">
        <img
          src={HeaderImagen}
          alt="Imagen del header"
          className="w-full h-full object-cover object-left"
        />
      </section>
      <section className="w-11/12 flex flex-col items-center mt-10 md:items-start">
        <h1 className="animate-fade-down text-4xl text-center text-neutral-very-dark-violet font-bold md:text-5xl lg:text-6xl md:text-start md:leading-[70px]">
          More than just shorter links
        </h1>
        <p className="animate-fade-down text-lg mt-4 mb-8 font-medium text-neutral-gray text-center md:text-start md:mt-2">
          Build your brand&apos;s recognition and get detailed insights on how
          your links are performing.
        </p>
        <Button/>
      </section>
    </header>
  );
};

export default Header;
