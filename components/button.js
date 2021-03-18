const Button = ({ children, onClick, disabled, width }) => {
  const buttonWidth = width || "w-full";
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={`flex items-center justify-center px-5 py-3 border border-transparent text-2xl leading-6 font-medium rounded-md text-offWhite rounded-md shadow bg-navyBlue hover:bg-saturatedDarkBlue focus:outline-none focus:shadow-outline disabled:opacity-75 disabled:cursor-not-allowed transition duration-150 ease-in-out ${buttonWidth}`}
    >
      {children}
    </button>
  );
};

export default Button;
