import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary-400 py-16 text-white">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Pinnakle enterprise is the brand Name when it comes to medical
            equipments and medical text <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>© M D Lab All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">WhatsApp</p>
          <p className="my-5">Facebook</p>
          <p className="my-5">Twitter</p>
          <p className="my-5">
            Instagram
          </p>
          <p>Ullamcorper vivamus</p>
        </div>
        <div className="mt-16 basis-1/4 text-white md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Pinnakle Enterprice Ibadan Oyo State</p>
          <p>(+234)425-6825</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
//  "primary-500": "#00ADEE",
        // "primary-500": "#080b53",
        // "primary-500": "#d608a7",
        // "secondary-400": "#0070C0",