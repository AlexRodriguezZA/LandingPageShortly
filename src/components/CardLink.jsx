import { useState } from "react";

const CardLink = ({ LinkObject }) => {
  const [Copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (LinkObject.short) {
      const clipboard = navigator.clipboard;
      clipboard.writeText(LinkObject.short);
      setCopied(true);
    } else {
      setCopied(false);
      return;
    }
  };

  return (
    <article className="animate-fade-down animate-duration-200 w-11/12 bg-white rounded-lg mt-6 flex flex-col items-center md:flex-row md:h-16 md:shadow-sm">
      <div className="w-full md:w-[400px]">
        <p className="mt-3 ml-3 mr-3 font-medium truncate md:mt-0 md:ml-6 md:text-xl">
          {LinkObject.full}
        </p>
      </div>

      <div className="w-full h-[0.2px] bg-neutral-gray my-3 text-white md:hidden">
        .
      </div>
      <div className="w-full">
        <p className="text-primary-cyan ml-3 mr-3 font-medium truncate md:text-xl md:text-end md:ml-0">
          {LinkObject.short}
        </p>
      </div>
      {Copied ? (
        <button
          onClick={handleCopy}
          className="11/12 rounded-md bg-primary-dark-violet w-11/12 py-[5px] mt-3 mb-3 text-white font-bold md:w-56 md:mx-6 md:text-base"
        >
          Copied!
        </button>
      ) : (
        <button
          onClick={handleCopy}
          className="11/12 rounded-md bg-primary-cyan w-11/12 py-[5px] mt-3 mb-3 text-white font-bold hover:bg-cyan-300 md:w-56 md:mx-6 md:text-base"
        >
          Copy
        </button>
      )}
    </article>
  );
};

export default CardLink;
