//Componentes
import logo from "../../assets/images/logo.svg";
import menu from "../../assets/icons/menu_icon.svg";
import CardNavMobile from "./CardNavMobile";

//Hooks
import { useState } from "react";
const NavMobile = () => {

  const [open, setOpen] = useState(false)

  return (
    <>
    
    <nav className="w-full md:hidden">
      <section className="w-full flex justify-between ">
        <div className="mt-8 ml-5">
          <img src={logo} alt="Logo de la página" />
        </div>

        <button className="h-full mt-8 mr-5" onClick={()=>setOpen(!open)}>
          <img src={menu} alt="menu icon" className="w-7" />
        </button>
      </section>
    </nav>
    <CardNavMobile open={open}/>
    </>
    
  );
};

export default NavMobile;
