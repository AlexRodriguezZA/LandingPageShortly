import bg from "../assets/images/bg-shorten-desktop.svg";

import { useState } from "react";
import { FetchLink } from "../Utils/FetchLink";

const CardInput = ({ setLinks }) => {
  const [LinkInput, setLinkInput] = useState("");
  const [Error, setError] = useState(false);
  

  //Estilos para la imagen del background
  const bgStyleIMG = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  
  const handleSearch = async () => {
    if (LinkInput === "") {
      setError(true);
      return;
    }
    setError(false);
    const data = await FetchLink(LinkInput);
    const NewlinkObject = {
      full: data.result.original_link,
      short: data.result.short_link,
    };

    setLinks((Prevlinks) => [NewlinkObject ,...Prevlinks]);
  };
 

  return (
    <div
      className="w-11/12 h-40 rounded-lg bg-primary-dark-violet flex flex-col justify-center items-center gap-3 md:flex-row md:h-32 md:w-10/12  max-w-screen-xl"
      style={bgStyleIMG}
    >
      <input
        onChange={(e) => setLinkInput(e.target.value)}
        className={`w-10/12 h-12 rounded-md pl-4 focus:outline-none active:outline-none md:w-4/6 md:text-base ${
          Error ? "border-2 border-secondary-red" : "border-none"
        }`}
        type="text"
        placeholder="Shorten a link here..."
      />
      {Error ? (
        <p className="text-xs italic font-medium text-secondary-red text-left">
          Please add a link
        </p>
      ) : null}
      <button
        onClick={handleSearch}
        className="w-10/12 h-12 text-lg rounded-md bg-primary-cyan font-bold text-white hover:bg-cyan-300 md:w-32 md:text-base"
      >
        Shorten It!
      </button>
    </div>
  );
};

export default CardInput;
