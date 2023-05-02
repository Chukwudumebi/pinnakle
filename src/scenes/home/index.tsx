import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import HomePageText from "@/assets/HomeText1a.png";
// import SponsorRedBull from "@/assets/SponsorRedBull.png";
// import SponsorForbes from "@/assets/SponsorForbes.png";
// import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

const Home = () => {
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6">
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="md:before:content-evolvetext before:absolute before:-left-20 before:-top-20 before:z-[-1]">
                <img
                  alt="home-page-text"
                  src={HomePageText}
                  className="w-full rounded-lg"
                />
              </div>
            </div>

            <p className="mt-8 text-lg font-bold text-primary-500">
              The Best medical text and medical equipments
            </p>
          </motion.div>

          {/* ACTIONS */}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
          >
            <AnchorLink href="#services">
              <ActionButton to="/books">Learn More</ActionButton>
            </AnchorLink>
            <AnchorLink href="#contact">
              <ActionButton to="/contact-us">Contact Us</ActionButton>
            </AnchorLink>
          </motion.div>
        </div>

        {/* IMAGE */}
        <div className="hidden rounded-md md:block md:basis-2/5">
          <img alt="home-page-graphic" src={HomePageGraphic} />
        </div>
      </motion.div>

      {/* SPONSORS */}
      <div className="mx-auto mt-16 w-5/6 md:mt-0 md:flex md:justify-center md:gap-16">
        {/* <img alt="sponsor-red-bull" src={SponsorRedBull} /> */}
        {/* <img alt="sponsor-forbes" src={SponsorForbes} /> */}
        {/* <img alt="sponsor-fortune" src={SponsorFortune} /> */}
      </div>
    </section>
  );
};

export default Home;
