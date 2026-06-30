function Contact() {
  return (
    <div className="px-4 py-16">
      <div className="mx-auto max-w-5xl rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
              Contact us
            </p>
            <h1 className="mt-3 text-4xl font-bold text-gray-800">
              Let’s build something great together.
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Reach out for consultations, project discussions, or support. We’ll get back to you as soon as possible.
            </p>
          </div>

          <div className="space-y-4 rounded-xl bg-gray-50 p-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Email</h2>
              <p className="mt-1 text-gray-600">hello@mycompany.com</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Phone</h2>
              <p className="mt-1 text-gray-600">+234 800 000 0000</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Location</h2>
              <p className="mt-1 text-gray-600">Lagos, Nigeria</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
