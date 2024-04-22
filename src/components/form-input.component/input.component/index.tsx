import { useState } from "react";

interface Props {
  id: string;
  initialType: string;
  placeholder: string;
}

export const Input: React.FC<Props> = ({ id, initialType, placeholder }) => {
  const [type, setType] = useState(initialType)
  const [isActive, setActive] = useState(false);

  const isPassword = type === "password";

  const togglePasswordVisibility = () => {
    setType(isPassword ? "text" : "password")
    setActive(!isActive);
  };

  return (
    <>
      <input
        id={id}
        name={type}
        type={type as astroHTML.JSX.HTMLInputTypeAttribute}
        placeholder={placeholder}
        className={`py-2 text-center rounded-md bg-[#F7F7F7] drop-shadow-[0px_2px_2px_rgba(0,0,0,0.25)] w-full`}
      />
      {initialType === "password" && (
        <i
          onClick={() => togglePasswordVisibility()}
          className={`fa-regular ${
            isActive ? "fa-eye" : "fa-eye-slash"
          } absolute right-0 self-center mr-3 cursor-pointer text-[#BCBCBC] hover:text-black`}
        />
      )}
    </>
  );
};
