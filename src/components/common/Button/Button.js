import s from "./Button.module.css";
import cn from "classnames";

export const createButton = (
  className = undefined,
  text,
  type = "button",
  { ...props } = {}
) => {
  return (
    <div
      className={cn(
        {
          [className]: className !== undefined,
        },
        s.defaultButton
      )}
    >
      <button type={type} {...props}>
        {text}
      </button>
    </div>
  );
};
