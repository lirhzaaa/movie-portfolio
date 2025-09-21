const Button = ({
  children,
  onClick,
  className,
  textColor = "text-black",
  bg = "bg-white hover:bg-gray-200",
}) => {
  return (
    <button
      onClick={onClick}
      className={`${bg} ${textColor} font-bold text-ms py-2 px-4 rounded mt-4 ${className} cursor-pointer transition duration-300`}
    >
      {children}
    </button>
  );
};

export default Button;
