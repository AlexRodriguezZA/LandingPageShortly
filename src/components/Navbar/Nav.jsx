import logo from "../../assets/images/logo.svg";
import menu from "../../assets/icons/menu_icon.svg";
const Nav = () => {
  return (
    <nav className="hidden md:flex md:w-full md:justify-center h-20">
      <div className="w-10/12 flex flex-row h-full justify-between  max-w-screen-xl">

        <section className="flex items-center gap-10">
          <div>
            <img src={logo} alt="Logo de la página" className="w-[100px]"/>
          </div>

          <ul className="flex gap-10">
            <li className="font-bold text-neutral-gray text-sm hover:cursor-pointer hover:text-black">Features</li>
            <li className="font-bold text-neutral-gray text-sm hover:cursor-pointer hover:text-black">Pricing</li>
            <li className="font-bold text-neutral-gray text-sm hover:cursor-pointer hover:text-black">Resources</li>
          </ul>
        </section>

        <section className="flex gap-8 items-center">
          <button className="font-bold text-neutral-gray text-sm hover:cursor-pointer hover:text-black">Login</button>
          <button className="bg-primary-cyan rounded-full font-bold text-white text-sm w-24 py-2 hover:bg-cyan-300">Sing Up</button>
        </section>
      </div>
    </nav>
  );
};

export default Nav;
