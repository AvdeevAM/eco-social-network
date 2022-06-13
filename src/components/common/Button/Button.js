import s from "./Button.module.css";

export const createButton = (className = s.defaultButton, text, type, { ...props }) => {   
return (
    <div className={className}>
      <button type={type} {...props}>
        {text}
      </button>
    </div>
  );
};
