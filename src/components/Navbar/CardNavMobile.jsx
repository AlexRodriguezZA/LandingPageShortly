const Items = [
  {
    name: "Features",
    id: "1",
  },
  {
    name: "Pricing",
    id: "2",
  },
  {
    name: "Resources",
    id: "3",
  },
];

const CardNavMobile = ({ open }) => {
  return (
    <div className={`${!open ? 'hidden' : 'absolute w-11/12  duration-300 rounded-lg flex flex-col items-center bg-primary-dark-violet mt-20'}`}>
      <section className="w-full flex flex-col items-center mt-5 mb-10">
        <ul className="w-full flex flex-col items-center gap-7">
          {Items &&
            Items.map((item) => (
              <li className="font-bold text-white" key={item.id}>
                {item.name}
              </li>
            ))}
        </ul>
      </section>

      <div className="bg-neutral-gray h-[1px] w-10/12 text-primary-dark-violet">
        .
      </div>
      <section className="w-full flex flex-col items-center my-10">
        <ul className="w-full flex flex-col items-center gap-7">
          <li className="font-bold text-white">Login</li>
          <button className="font-bold text-white bg-primary-cyan rounded-full w-10/12 py-3">
            Sing Up
          </button>
        </ul>
      </section>
    </div>
  );
};

export default CardNavMobile;
