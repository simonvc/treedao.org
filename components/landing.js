const Landing = () => {
  return (
    <div className="w-full flex flex-grow">
      <div className="container px-4 py-12 md:py-24 mx-auto flex flex-col items-center justify-around text-center text-3xl md:text-4xl lg:text-5xl leading-9 font-bold md:font-extrabold text-navyBlue w-full">
        <h2 className="my-4">
          Why send flowers when you can send a whole tree?
        </h2>

        <div className="my-4 text-xl md:text-2xl lg:text-3xl font-normal">
          <a
            href="https://github.com/simonvc/treedao.org/blob/docs/faq.md"
            target="_blank"
          >
            👉 FAQs
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
