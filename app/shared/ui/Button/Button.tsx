import { motion } from "motion/react";

type Props = {
  children: React.ReactNode;
};

export const Button: React.FC<
  Props & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, ...props }: Props) => {
  return (
    <motion.button
      whileTap={{ scale: 0.95, transition: { duration: 0.5 } }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
