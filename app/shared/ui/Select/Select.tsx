import { useEffect, useRef, useState } from "react";

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

  return (
    <div ref={ref}>
      <button onClick={() => setIsOpen(!isOpen)}>{value || placeholder}</button>

      {isOpen && (
        <div>
          {items.map((item) => (
            <div key={item.value} onClick={() => onChange(item.value)}>
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
