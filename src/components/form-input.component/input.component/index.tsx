interface Props {
    id: string,
    type: string,
    placeholder: string;
}

export const Input: React.FC<Props> = ({ id, type, placeholder }) => {
  return (
    <input
      id={id}
      name={type}
      type={type as astroHTML.JSX.HTMLInputTypeAttribute}
      placeholder={placeholder}
      className={`py-2 text-center rounded-md bg-[#F7F7F7] drop-shadow-[0px_2px_2px_rgba(0,0,0,0.25)] w-full`}
    />
  );
};
