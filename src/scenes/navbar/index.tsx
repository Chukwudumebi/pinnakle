
/**** The Fourth iteration */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Logo from "@/assets/Logo.png";
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
  isTopOfPage: boolean;
};

const Navbar = ({ isTopOfPage }: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const navbarBackground = isTopOfPage
    ? "bg-secondary-400"
    : "bg-secondary-400 drop-shadow";
  const navigate = useNavigate();

  const handleNavItemClick = (path: string) => {
    navigate(path);
    setIsMenuToggled(false);
  };

  const navItems = (
    <>
      <div onClick={() => handleNavItemClick("/")}>Home</div>
      <div onClick={() => handleNavItemClick("/books")}>Books</div>
      <div onClick={() => handleNavItemClick("/medical-equipments")}>
        Medical Equipments
      </div>
      <div onClick={() => handleNavItemClick("/contact-us")}>Contact Us</div>
    </>
  );

  return (
    <nav>
      <div
        className={`\${navbarBackground} fixed top-0 z-30 flex w-full items-center justify-between py-6`}
      >
        <div className="mx-auto flex w-5/6 items-center justify-between">
          <div className="flex rounded-md items-center gap-8">
            <img alt="logo" src={Logo} />
          </div>
          {isAboveMediumScreens ? (
            <div className="flex items-center gap-4">{navItems}</div>
          ) : (
            <>
              <MenuIcon
                className="h-8 w-8 text-secondary-400"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              />
              {isMenuToggled && (
                <div className="fixed left-0 top-0 z-20 h-full w-full bg-secondary-400">
                  <XIcon
                    className="absolute right-4 top-4 h-8 w-8 text-white"
                    onClick={() => setIsMenuToggled(!isMenuToggled)}
                  />
                  <div className="flex h-full flex-col items-center justify-center gap-4 text-white">
                    {navItems}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

/**______________Third Iteration better */
// import { Link, useLocation } from "react-router-dom";
// import { useState } from "react";
// import { MenuIcon, XIcon } from "@heroicons/react/outline";
// import Logo from "@/assets/Logo.png";
// import useMediaQuery from "@/hooks/useMediaQuery";
// import ActionButton from "@/shared/ActionButton";

// // Rest of the Navbar component

// type Props = {
//   isTopOfPage: boolean;
// };

// const Navbar = ({ isTopOfPage }: Props) => {
//   const flexBetween = "flex items-center justify-between";
//   const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
//   const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
//   const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";
//   const location = useLocation();

//   return (
//     <nav>
//       <div
//         className={`\${navbarBackground} \${flexBetween} fixed top-0 z-30 w-full py-6`}
//       >
//         <div className={`\${flexBetween} mx-auto w-5/6`}>
//           <div className={`\${flexBetween} w-full gap-16`}>
//             {/* LEFT SIDE */}
//             <img alt="logo" src={Logo} />

//             {/* RIGHT SIDE */}
//             {isAboveMediumScreens ? (
//               <div className={`\${flexBetween}`}>
//                 <div className={`\${flexBetween} w-full gap-40 text-sm`}>
//                   <Link
//                     to="/"
//                     className={`nav-link \${location.pathname === "/" ? "active-link" : ""}`}
//                   >
//                     Home
//                   </Link>
//                   <Link
//                     to="/books"
//                     className={`nav-link \${location.pathname === "/books" ? "active-link" : ""}`}
//                   >
//                     Books
//                   </Link>
//                   <Link
//                     to="/medical-equipments"
//                     className={`nav-link \${location.pathname === "/medical-equipments" ? "active-link" : ""}`}
//                   >
//                     Medical Equipments
//                   </Link>
//                   <Link
//                     to="/contact-us"
//                     className={`nav-link \${location.pathname === "/contact-us" ? "active-link" : ""}`}
//                   >
//                     Contact Us
//                   </Link>
//                 </div>
//                 {/* <ActionButton /> */}
//               </div>
//             ) : (
//               <>
//                 <MenuIcon
//                   onClick={() => setIsMenuToggled(true)}
//                   className="h-6 w-6 cursor-pointer"
//                 />
//                 {isMenuToggled && (
//                   <div className="fixed left-0 top-0 z-20 flex h-full w-full items-center justify-center bg-black bg-opacity-50">
//                     <XIcon
//                       onClick={() => setIsMenuToggled(false)}
//                       className="absolute right-10 top-10 h-6 w-6 cursor-pointer"
//                     />
//                     <div className="flex flex-col items-center justify-center gap-12 text-2xl">
//                       <Link
//                         to="/"
//                         className={`nav-link \${location.pathname === "/" ? "active-link" : ""}`}
//                         onClick={() => setIsMenuToggled(false)}
//                       >
//                         Home
//                       </Link>
//                       <Link
//                         to="/books"
//                         className={`nav-link \${location.pathname === "/books" ? "active-link" : ""}`}
//                         onClick={() => setIsMenuToggled(false)}
//                       >
//                         Books
//                       </Link>
//                       <Link
//                         to="/medical-equipments"
//                         className={`nav-link \${location.pathname === "/medical-equipments" ? "active-link" : ""}`}
//                         onClick={() => setIsMenuToggled(false)}
//                       >
//                         Medical Equipments
//                       </Link>
//                       <Link
//                         to="/contact-us"
//                         className={`nav-link \${location.pathname === "/contact-us" ? "active-link" : ""}`}
//                         onClick={() => setIsMenuToggled(false)}
//                       >
//                         Contact Us
//                       </Link>
//                       {/* <ActionButton /> */}
//                     </div>
//                   </div>
//                 )}
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

/**Second Iteration a little better */
// import { Link, useLocation } from "react-router-dom";
// import { useState } from "react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
// import Logo from "@/assets/Logo.png";
// import useMediaQuery from "@/hooks/useMediaQuery";
// import ActionButton from "@/shared/ActionButton";

// type Props = {
//   isTopOfPage: boolean;
// };

// const Navbar = ({ isTopOfPage }: Props) => {
//   const flexBetween = "flex items-center justify-between";
//   const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
//   const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
//   const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";
//   const location = useLocation();

//   return (
//     <nav>
//       <div
//         className={`\${navbarBackground} \${flexBetween} fixed top-0 z-30 w-full py-6`}
//       >
//         <div className={`\${flexBetween} mx-auto w-5/6`}>
//           <div className={`\${flexBetween} w-full gap-16`}>
//             {/* LEFT SIDE */}
//             <img alt="logo" src={Logo} />

//             {/* RIGHT SIDE */}
//             {isAboveMediumScreens ? (
//               <div className={`\${flexBetween}`}>
//                 <div className={`\${flexBetween} w-full gap-40 text-sm`}>
//                   <Link
//                     to="/"
//                     className={`nav-link \${location.pathname === "/" ? "active-link" : ""}`}
//                   >
//                     Home
//                   </Link>
//                   <Link
//                     to="/books"
//                     className={`nav-link \${location.pathname === "/books" ? "active-link" : ""}`}
//                   >
//                     Books
//                   </Link>
//                   <Link
//                     to="/medical-equipments"
//                     className={`nav-link \${location.pathname === "/medical-equipments" ? "active-link" : ""}`}
//                   >
//                     Medical Equipments
//                   </Link>
//                   <Link
//                     to="/contact-us"
//                     className={`nav-link \${location.pathname === "/contact-us" ? "active-link" : ""}`}
//                   >
//                     Contact Us
//                   </Link>
//                 </div>
//                 <ActionButton />
//               </div>
//             ) : (
//               <>
//                 <Bars3Icon
//                   onClick={() => setIsMenuToggled(true)}
//                   className="cursor-pointer"
//                 />
//                 {isMenuToggled && (
//                   <div className="fixed left-0 top-0 z-20 flex h-full w-full items-center justify-center bg-black bg-opacity-50">
//                     <XMarkIcon
//                       onClick={() => setIsMenuToggled(false)}
//                       className="absolute right-10 top-10 cursor-pointer"
//                     />
//                     <div className="flex flex-col items-center justify-center gap-12 text-2xl">
//                       <Link
//                         to="/"
//                         className={`nav-link \${location.pathname === "/" ? "active-link" : ""}`}
//                         onClick={() => setIsMenuToggled(false)}
//                       >
//                         Home
//                       </Link>
//                       <Link
//                         to="/books"
//                         className={`nav-link \${location.pathname === "/books" ? "active-link" : ""}`}
//                         onClick={() => setIsMenuToggled(false)}
//                       >
//                         Books
//                       </Link>
//                       <Link
//                         to="/medical-equipments"
//                         className={`nav-link \${location.pathname === "/medical-equipments" ? "active-link" : ""}`}
//                         onClick={() => setIsMenuToggled(false)}
//                       >
//                         Medical Equipments
//                       </Link>
//                       <Link
//                         to="/contact-us"
//                         className={`nav-link \${location.pathname === "/contact-us" ? "active-link" : ""}`}
//                         onClick={() => setIsMenuToggled(false)}
//                       >
//                         Contact Us
//                       </Link>
//                       <ActionButton />
//                     </div>
//                   </div>
//                 )}
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

/*First Iteration not so good*/
// import { Link, useLocation } from "react-router-dom";
// import { useState } from "react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
// import Logo from "@/assets/Logo.png";
// import useMediaQuery from "@/hooks/useMediaQuery";
// import ActionButton from "@/shared/ActionButton";

// type Props = {
//   isTopOfPage: boolean;
// };

// const Navbar = ({ isTopOfPage }: Props) => {
//   const flexBetween = "flex items-center justify-between";
//   const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
//   const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
//   const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";
//   const location = useLocation();

//   return (
//     <nav>
//       <div
//         className={`\${navbarBackground} \${flexBetween} fixed top-0 z-30 w-full py-6`}
//       >
//         <div className={`\${flexBetween} mx-auto w-5/6`}>
//           <div className={`\${flexBetween} w-full gap-16`}>
//             {/* LEFT SIDE */}
//             <img alt="logo" src={Logo} />

//             {/* RIGHT SIDE */}
//             {isAboveMediumScreens ? (
//               <div className={`\${flexBetween}`}>
//                 <div className={`\${flexBetween} w-full gap-40 text-sm`}>
//                   <Link
//                     to="/"
//                     className={`nav-link \${location.pathname === "/" ? "active-link" : ""}`}
//                   >
//                     Home
//                   </Link>
//                   <Link
//                     to="/books"
//                     className={`nav-link \${location.pathname === "/books" ? "active-link" : ""}`}
//                   >
//                     Books
//                   </Link>
//                   <Link
//                     to="/medical-equipments"
//                     className={`nav-link \${location.pathname === "/medical-equipments" ? "active-link" : ""}`}
//                   >
//                     Medical Equipments
//                   </Link>
//                   <Link
//                     to="/contact-us"
//                     className={`nav-link \${location.pathname === "/contact-us" ? "active-link" : ""}`}
//                   >
//                     Contact Us
//                   </Link>
//                 </div>
//                 <div className={`\${flexBetween} gap-8`}>
//                   <ActionButton>chat on Whatsapp</ActionButton>
//                 </div>
//               </div>
//             ) : (
//               <>
//                 <Bars3Icon
//                   onClick={() => setIsMenuToggled(!isMenuToggled)}
//                   className="text-primary-500"
//                 />
//                 {isMenuToggled && (
//                   <div className="fixed right-0 top-0 z-20 h-full w-full bg-white">
//                     <XMarkIcon
//                       onClick={() => setIsMenuToggled(!isMenuToggled)}
//                       className="absolute right-6 top-6 text-primary-500"
//                     />
//                     <div className="mt-20 flex flex-col items-center space-y-10">
//                       <Link
//                         to="/"
//                         className={`nav-link \${location.pathname === "/" ? "active-link" : ""}`}
//                         onClick={() => setIsMenuToggled(false)}
//                       >
//                         Home
//                       </Link>
//                       <Link
//                         to="/books"
//                         className={`nav-link \${location.pathname === "/books" ? "active-link" : ""}`}
//                         onClick={() => setIsMenuToggled(false)}
//                       >
//                         Books
//                       </Link>
//                       <Link
//                         to="/medical-equipments"
//                         className={`nav-link \${location.pathname === "/medical-equipments" ? "active-link" : ""}`}
//                         onClick={() => setIsMenuToggled(false)}
//                       >
//                         Medical Equipments
//                       </Link>
//                       <Link
//                         to="/contact-us"
//                         className={`nav-link \${location.pathname === "/contact-us" ? "active-link" : ""}`}
//                         onClick={() => setIsMenuToggled(false)}
//                       >
//                         Contact Us
//                       </Link>
//                       <div className={`\${flexBetween} gap-8`}>
//                         <ActionButton>chat on Whatsapp</ActionButton>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
