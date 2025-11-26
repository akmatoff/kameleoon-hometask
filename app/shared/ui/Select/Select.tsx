import { useEffect, useRef, useState } from "react";

import styles from "./Select.module.scss";
import { motion } from "motion/react";

type Item = {
  label: string;
  value: string;
};

type Props = {
  items: Item[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export const Select = ({
  items,
  value,
  onChange,
  placeholder = "Select value...",
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const displayValue =
    items.find((item) => item.value === value)?.label || placeholder;

  const handleSelect = (value: string) => {
    onChange(value);
    setIsOpen(false);
  };

  return (
    <div
      ref={ref}
      className={styles.select}
      role="combobox"
      aria-expanded={isOpen}
    >
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.98, transition: { duration: 0.2 } }}
      >
        {displayValue}
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className={styles.popover}
          role="listbox"
          aria-multiselectable={false}
        >
          {items.map((item) => (
            <div key={item.value} onClick={() => handleSelect(item.value)}>
              {item.label}
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Select;
