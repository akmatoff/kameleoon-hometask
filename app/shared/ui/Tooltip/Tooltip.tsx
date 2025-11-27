import { Tooltip as ReactTooltip } from "react-tooltip";
import "./Tooltip.module.scss";

type Props = {
  id: string;
};
export const Tooltip = ({ id }: Props) => {
  return (
    <ReactTooltip
      id={id}
      style={{
        backgroundColor: "var(--background-color)",
        color: "var(--foreground-color)",
        border: "1px solid var(--border-color)",
        boxShadow: "1px 2px 4px rgba(10, 10, 10, 0.05)",
        fontSize: "12px",
      }}
    />
  );
};

export default Tooltip;
