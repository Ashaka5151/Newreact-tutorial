function Services() {
  return (
    <div className="px-4 py-16">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold text-gray-800">Our Services</h1>
        <p className="mt-4 text-lg text-gray-600">
          We provide reliable solutions tailored to your needs, from strategy and
          design to delivery and ongoing support.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800">onsulting</h2>
            <p className="mt-2 text-gray-600">
              Expert guidance to help your team make the right decisions.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800">Development</h2>
            <p className="mt-2 text-gray-600">
              Custom digital products built with performance and scalability in mind.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800">Support</h2>
            <p className="mt-2 text-gray-600">
              Ongoing assistance to keep your systems running smoothly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
