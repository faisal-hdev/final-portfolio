// import React from "react";
// import MagicButton from "./ui/MagicButton";
// import { FaLocationArrow } from "react-icons/fa6";
// import { socialMedia } from "@/data";

// const Footer = () => {
//   return (
//     <footer id="contact" className="w-full pb-10 pt-20">
//       <div className="w-full absolute left-0 -bottom-72 min-h-96">
//         <img
//           src="/footer-grid.svg"
//           alt="grid"
//           className="w-full h-full opacity-50"
//         />
//       </div>
//       <div className="flex flex-col items-center relative">
//         <h1 className="lg:max- w-[45w] text-center font-semibold md:font-bold text-4xl md:text-5xl">
//           Ready to take{" "}
//           <span className="text-purple">
//             digital presence to the next level
//           </span>
//         </h1>
//         <p className="text-white-200 md:mt-10 my-5 text-center">
//                Reach out to me today and let&apos;s discuss how I can help you
//   achieve your goals.
//         </p>
//         <a href="faisalhossen396@gmail.com">
//           <MagicButton
//             icon={<FaLocationArrow />}
//             position="right"
//             title="Lets get in touch"
//           />
//         </a>
//       </div>
//       <div className="flex mt-16 flex-col md:flex-row justify-between items-center">
//         <p className="md:text-base text-sm md:font-normal font-light">
//           Copyright © 2025 FaisalHdev
//         </p>
//         <div className="flex items-center md:gap-4 gap-6">
//           {socialMedia.map((profile) => (
//             <div
//               key={profile.id}
//               className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
//             >
//               <img src={profile.img} alt="" width={20} height={20} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";
// import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-5 md:pt-16 lg:pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="faisalhossen396@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row gap-5 flex-col justify-between items-center">
        <div className="flex items-center md:gap-3 gap-6 text-white">
          {socialMedia.map((info) => (
            <a
              target="_blank"
              href={info.link}
              key={info.id}
              className="w-10 text-white h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              {/* {info.link} */}
              <img
                className="text-white"
                src={info.img}
                alt="icons"
                width={20}
                height={20}
              />
            </a>
          ))}
        </div>
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 FaisalHdev
        </p>
      </div>
    </footer>
  );
};

export default Footer;
