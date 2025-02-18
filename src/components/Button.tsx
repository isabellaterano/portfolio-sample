import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

type EncryptButtonProps = {
  text: string;
  url?: string;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  loading?: boolean;
};

const Button: React.FC<EncryptButtonProps> = ({
  text,
  url,
  onClick,
  className,
  icon,
  loading,
}) => {
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [displayText, setDisplayText] = useState(text);

  const CYCLES_PER_LETTER = 2;
  const SHUFFLE_TIME = 50;
  const CHARS = "!@#$%^&*():{};|,.<>/?";

  const scramble = () => {
    let pos = 0;

    intervalRef.current = setInterval(() => {
      const scrambled = text
        .split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }

          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];

          return randomChar;
        })
        .join("");

      setDisplayText(scrambled);
      pos++;

      if (pos >= text.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    setDisplayText(text);
  };

  const handleClick = () => {
    if (url) {
      if (url.startsWith("#")) {
        const targetElement = document.getElementById(url.substring(1));
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        window.open(url, "_blank", "noopener,noreferrer");
      }
    }
    if (onClick) {
      onClick();
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <motion.button
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 0.975 }}
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      onClick={handleClick}
      className={`relative overflow-hidden rounded-lg border-[1px] border-neutral-500 bg-neutral-800 px-4 py-2 text-sm font-mono font-medium uppercase text-neutral-300 transition-colors hover:text-lime-300 ${className}`}
      disabled={loading}
    >
      <div className="relative z-10 flex items-center justify-center gap-2">
        {icon}
        <span className="text-center">{displayText}</span>
      </div>
      <motion.span
        initial={{ y: "100%" }}
        animate={{ y: "-100%" }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 1,
          ease: "linear",
        }}
        className="duration-300 absolute inset-0 z-0 scale-125 bg-gradient-to-t from-lime-400/0 from-40% via-lime-400/100 to-lime-400/0 to-60% opacity-0 transition-opacity group-hover:opacity-100"
      />
    </motion.button>
  );
};

export default Button;
