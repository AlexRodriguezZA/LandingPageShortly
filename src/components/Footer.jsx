import { Features, Resources, Company } from "../Utils/footerData";

//Images
import FBIcon from "../assets/icons/icon-facebook.svg";
import TWIcon from "../assets/icons/icon-twitter.svg";
import InstagramIcon from "../assets/icons/icon-instagram.svg";
import PinteresIcon from "../assets/icons/icon-pinterest.svg";

import logoFooter from "../assets/images/logo_footer.svg";
const Footer = () => {
  return (
    <footer className="w-full bg-neutral-very-dark-violet flex items-center md:h-72 md:justify-center">
      <div className="w-full flex flex-col items-center md:flex-row md:justify-around md:items-start max-w-screen-xl	">
        <section className="w-full flex items-start my-12 md:my-0 md:w-1/4 justify-center">
          <img src={logoFooter} alt="Logo del footer" />
        </section>

        <section className="flex flex-col items-center md:items-start">
          <p className="text-white font-bold mb-4">Features</p>
          <div className="flex flex-col items-center gap-2 md:items-start">
            {Features &&
              Features.map((feature) => (
                <p
                  className="text-neutral-gray font-medium text-sm"
                  key={feature.id}
                >
                  {feature.Feature}
                </p>
              ))}
          </div>
        </section>

        <section className="flex flex-col items-center mt-8 md:mt-0 md:items-start">
          <p className="text-white font-bold mb-4">Resources</p>
          <div className="flex flex-col items-center gap-2 md:items-start">
            {Resources &&
              Resources.map((resource) => (
                <p
                  className="text-neutral-gray font-medium text-sm"
                  key={resource.id}
                >
                  {resource.Resource}
                </p>
              ))}
          </div>
        </section>

        <section className="flex flex-col items-center mt-8 md:mt-0 md:items-start">
          <p className="text-white font-bold mb-4">Company</p>
          <div className="flex flex-col items-center gap-2 md:items-start">
            {Company &&
              Company.map((company) => (
                <p
                  className="text-neutral-gray font-medium text-sm"
                  key={company.id}
                >
                  {company.Company}
                </p>
              ))}
          </div>
        </section>

        <section className="flex justify-center my-10 gap-5 md:my-0  md:mr-10">
          <img src={FBIcon} alt="Icono de facebook" />
          <img src={TWIcon} alt="Icono de twitter" />
          <img src={PinteresIcon} alt="Icono de pinterest" />
          <img src={InstagramIcon} alt="Icono de instagram" />
        </section>
      </div>
    </footer>
  );
};

export default Footer;
