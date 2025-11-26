import { useEffect, useRef, useState } from "react";
import styles from "./MultiSelect.module.scss";
import { motion } from "motion/react";

type Item = {
  label: string;
  value: string;
};

type Props = {
  items: Item[];
  selectedValues: string[];
  onChange: (values: string[]) => void;
  placeholder?: string;
};

export const MultiSelect = ({
  items,
  selectedValues,
  onChange,
  placeholder = "Select value...",
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const toggle = (value: string) => {
    if (selectedValues.includes(value)) {
      onChange(selectedValues.filter((v) => v !== value));
    } else {
      onChange([...selectedValues, value]);
    }
  };

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

  return (
    <div
      ref={ref}
      className={styles.select}
      role="combobox"
      aria-expanded={isOpen}
    >
      <motion.button
        whileTap={{ scale: 0.98, transition: { duration: 0.2 } }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedValues.length > 0
          ? selectedValues
              .map((v) => items.find((i) => i.value === v)?.label)
              .filter(Boolean)
              .join(",")
          : placeholder}
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
          aria-multiselectable
        >
          {items.map((item) => (
            <div key={item.value} onClick={() => toggle(item.value)}>
              {item.label}
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default MultiSelect;
