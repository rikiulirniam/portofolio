import { motion } from "framer-motion";
import { useState } from "react";

export const HoverImage = () => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="img-profile w-1/2 flex items-center justify-center"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="home-img w-1/2 rounded-full overflow-hidden relative">
        {/* Gambar Default */}
        <motion.img
          src="./images/riki1.png"
          className="w-full h-full object-cover absolute"
          alt="default"
          animate={{ opacity: hover ? 0 : 1 }}
          initial={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
        {/* Gambar Hover */}
        <motion.img
          src="./images/riki1.jpg"
          className="w-full h-full object-cover absolute"
          alt="hovered"
          animate={{ opacity: hover ? 1 : 0 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};
