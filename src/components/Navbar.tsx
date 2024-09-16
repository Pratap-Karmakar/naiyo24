"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Our Services">
          <div className="flex flex-col space-y-4 text-sm uppercase">
            <HoveredLink href="/services">Creative Design</HoveredLink>
            <HoveredLink href="/services">CMS & E-Commerce</HoveredLink>
            <HoveredLink href="/services">Web Application</HoveredLink>
            <HoveredLink href="/services">Mobile Application</HoveredLink>
            <HoveredLink href="/services">Strategy & Consulting</HoveredLink>
            <HoveredLink href="/services">Digital Marketing</HoveredLink>
            <HoveredLink href="/services">Server Management</HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/contact"}>
          <MenuItem setActive={setActive} active={active} item="Contact Us">
          </MenuItem>
        </Link>
      </Menu>
    </motion.div>
  );
}

export default Navbar;





// "use client";

// import React, { useState } from "react";
// import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
// import Link from "next/link";
// import { cn } from "@/lib/utils";
// import { motion } from "framer-motion";

// function Navbar({ className }: { className?: string }) {
//   const [active, setActive] = useState<string | null>(null);
//   return (
//     <motion.div
//     initial={{ y: -10, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.5, delay: 0.6 }}
//       className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
//     >
//       <Menu setActive={setActive}>
//         <Link href={"/"}>
//           <MenuItem
//             setActive={setActive}
//             active={active}
//             item="Home"
//           >
//           </MenuItem>
//         </Link>
//         <MenuItem setActive={setActive} active={active} item="Our Services">
//           <div className="flex flex-col space-y-4 text-sm uppercase">
//             <HoveredLink href="/services">Creative Design</HoveredLink>
//             <HoveredLink href="/services">CMS & E-Commerce</HoveredLink>
//             <HoveredLink href="/services">Web Application</HoveredLink>
//             <HoveredLink href="/services">Mobile Application</HoveredLink>
//             <HoveredLink href="/services">Strategy & Consulting</HoveredLink>
//             <HoveredLink href="/services">Digital Marketing</HoveredLink>
//             <HoveredLink href="/services">Server Management</HoveredLink>
//           </div>
//         </MenuItem>
//         <Link href={"/contact"}>
//           <MenuItem
//             setActive={setActive}
//             active={active}
//             item="Contact Us"
//           >
//           </MenuItem>
//         </Link>
//       </Menu>
//     </motion.div>
//   );
// }

// export default Navbar;























// "use client";

// import React, { useState } from "react";
// import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
// import Link from "next/link";
// import { cn } from "@/lib/utils";
// import { motion } from "framer-motion";

// function Navbar({ className }: { className?: string }) {
//   const [active, setActive] = useState<string | null>(null);
//   return (
//     <motion.div
//     initial={{ y: -10, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.5, delay: 0.6 }}
//       className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
//     >
//       <Menu setActive={setActive}>
//         <Link href={"/"}>
//           <MenuItem
//             setActive={setActive}
//             active={active}
//             item="Home"
//           >
//           </MenuItem>
//         </Link>
//         <MenuItem setActive={setActive} active={active} item="Our Services">
//           <div className="flex flex-col space-y-4 text-sm uppercase">
//             <HoveredLink href="/services">Creative Design</HoveredLink>
//             <HoveredLink href="/services">CMS & E-Commerce</HoveredLink>
//             <HoveredLink href="/services">Web Application</HoveredLink>
//             <HoveredLink href="/services">Mobile Application</HoveredLink>
//             <HoveredLink href="/services">Strategy & Consulting</HoveredLink>
//             <HoveredLink href="/services">Digital Marketing</HoveredLink>
//             <HoveredLink href="/services">Server Management</HoveredLink>
//           </div>
//         </MenuItem>
//         <Link href={"/contact"}>
//           <MenuItem
//             setActive={setActive}
//             active={active}
//             item="Contact Us"
//           >
//           </MenuItem>
//         </Link>
//       </Menu>
//     </motion.div>
//   );
// }

// export default Navbar;
