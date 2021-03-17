const disabled = true;

const Button = ({ children, onClick, disabled }) => (
  <button
    type="button"
    disabled={disabled}
    className="flex items-center justify-center px-5 py-3 border border-transparent text-2xl leading-6 font-medium rounded-md text-offWhite rounded-md shadow bg-navyBlue hover:bg-saturatedDarkBlue focus:outline-none focus:shadow-outline disabled:opacity-75 disabled:cursor-not-allowed transition duration-150 ease-in-out w-full"
  >
    {children}
  </button>
);

export default Button;
