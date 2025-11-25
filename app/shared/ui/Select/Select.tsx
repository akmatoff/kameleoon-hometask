import * as SelectPrimitive from "@radix-ui/react-select";
import React from "react";

type Props = {
  items: { label: string; value: string }[];
  onValueChange: (value: string) => void;
};

const Select = ({ items, onValueChange }: Props) => {
  return (
    <SelectPrimitive.Root onValueChange={onValueChange}>
      <SelectPrimitive.Trigger>
        <SelectPrimitive.Value placeholder="Select an option" />
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Content>
        <SelectPrimitive.Viewport>
          {items.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Root>
  );
};

type SelectItemProps = React.ComponentProps<typeof SelectPrimitive.Item> & {
  children: React.ReactNode;
};

const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  ({ children, ...props }, ref) => {
    return (
      <SelectPrimitive.Item ref={ref} {...props}>
        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      </SelectPrimitive.Item>
    );
  }
);

SelectItem.displayName = "SelectItem";

export default Select;
