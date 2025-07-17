function AboutPage() {
  return (
    <section>
      <h1 className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center text-4xl font-bold leading-none tracking-wide sm:text--6xl">
        We love
        <span className="bg-primary py-2 px-4 rounded-lg tracking-widest text-white">
          Nexus Store
        </span>
      </h1>
      <p className="mt-6 text-lg tracking-wide leading-8 max-w-2xl mx-auto text-muted-foreground">
        We are a group of passionate individuals who are dedicated to making the
        world a better place. We believe in the power of technology to transform
        lives and create a better future for all. we deliver the best products
        and services to our customers.
      </p>
    </section>
  );
}

export default AboutPage;