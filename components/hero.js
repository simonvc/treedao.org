const Hero = () => {
  return (
    <div className="flex flex-col w-full container items-center justify-around px-4 py-8 lg:py-12 xl:mt-8 mx-auto">
      <h1 className="gradient-text text-4xl md:text-6xl lg:text-8xl">
        TreeDAO
      </h1>

      <h2 className="text-center text-lg md:text-xl lg:text-3xl font-bold md:font-extrabold text-navyBlue my-4">
        Why send flowers when you can send a whole NFTree?
      </h2>
    </div>
    <div> Read the <a href=https://docs.google.com/document/d/12pXHn7X1PDRK_D8YshHIktGklM7PgE-n4udueQVx8Cs/edit?usp=sharing>Whitepaper</a></div>
  );
};

export default Hero;
