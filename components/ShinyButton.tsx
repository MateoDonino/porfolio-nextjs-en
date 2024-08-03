"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { TfiWorld } from "react-icons/tfi";

const ShinyButton = () => {
  const [x, setX] = useState("100%");

  return (
    <motion.button
      initial={{ scale: 1 }}
      animate={{ scale: 1 }}
      whileTap={{ scale: 0.97 }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 1,
        type: "spring",
        stiffness: 20,
        damping: 15,
        mass: 2,
        scale: {
          type: "spring",
          stiffness: 10,
          damping: 5,
          mass: 0.1,
        },
      }}
      style={{ "--x": x } as React.CSSProperties}
      onAnimationComplete={() =>
        setX((prev) => (prev === "100%" ? "-100%" : "100%"))
      }
      className="px-6 py-2 rounded-md relative radial-gradient"
    >
      <span className="text-neutral-100 inline-flex tracking-wide font-light h-full w-full relative linear-mask">
        <svg
          className="mt-0.5 w-4 h-4 me-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
            clipRule="evenodd"
          />
        </svg>
        GitHub Repository
      </span>
      <span className="block absolute inset-0 rounded-md p-px linear-overlay" />
    </motion.button>
  );
};

export default ShinyButton;

const ShinyButton2 = () => {
  const [x, setX] = useState("100%");

  return (
    <motion.button
      initial={{ scale: 1 }}
      animate={{ scale: 1 }}
      whileTap={{ scale: 0.97 }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 1,
        type: "spring",
        stiffness: 20,
        damping: 15,
        mass: 2,
        scale: {
          type: "spring",
          stiffness: 10,
          damping: 5,
          mass: 0.1,
        },
      }}
      style={{ "--x": x } as React.CSSProperties}
      onAnimationComplete={() =>
        setX((prev) => (prev === "100%" ? "-100%" : "100%"))
      }
      className="px-6 py-2 rounded-md relative radial-gradient"
    >
      <span className="text-neutral-100 inline-flex tracking-wide font-light h-full w-full relative linear-mask">
        <TfiWorld className="mt-0.5 w-4 h-4 me-2" />
        Web Page
      </span>
      <span className="block absolute inset-0 rounded-md p-px linear-overlay" />
    </motion.button>
  );
};

export { ShinyButton2 };
