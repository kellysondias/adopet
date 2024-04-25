import { useState } from "react";

interface Props {
  id: string;
  placeholder: string;
}

export const PasswordInput: React.FC<Props> = ({ id, placeholder }) => {
  const [type, setType] = useState("password");
  const [isActive, setActive] = useState(false);
  const [value, setValue] = useState("");

	const isPassword = type === "password";

  const togglePasswordVisibility = () => {
    setType(isPassword ? "text" : "password");
    setActive(!isActive);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);

  return (
    <>
      <input
        id={id}
        name={type}
        type={type as astroHTML.JSX.HTMLInputTypeAttribute}
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
        className={`py-2 text-center rounded-md bg-[#F7F7F7] drop-shadow-[0px_2px_2px_rgba(0,0,0,0.25)] w-full`}
      />
      {value !== "" && (
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
