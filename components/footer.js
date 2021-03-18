const Footer = () => (
  <div className="flex flex-col md:flex-row w-full bg-natural-light h-24 py-4 px-4 md:px-8 items-center justify-center md:justify-between shadow-md-top">
    <div className="flex flex-col lg:flex-row text-center text-base md:text-lg leading-6 text-gray-500">
      <p>simon@vans-colina.com</p>
      <a
        href="https://twitter.com/TheTreeDAO"
        target="_blank"
        className="underline lg:ml-4"
      >
        @TheTreeDAO
      </a>
    </div>
    <div>
      <p className="text-center text-base md:text-lg leading-6 text-gray-500">
        Made with 💖 in London
      </p>
    </div>
  </div>
);

export default Footer;
