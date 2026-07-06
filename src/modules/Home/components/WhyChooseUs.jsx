import { motion } from "framer-motion";

function Feature({ title, desc }) {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{desc}</p>
    </div>
  );
}

function WhyChooseUs() {
  return (
    <section id="why-choose" className="bg-gray-50 py-16">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-900">Why Choose Us</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            We combine experience, speed, and a customer-first mindset to help
            you win. A few reasons teams pick us:
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <Feature
            title="Proven results"
            desc="Delivered measurable outcomes across diverse industries."
          />
          <Feature
            title="Customer-first"
            desc="We partner with you and iterate quickly based on feedback."
          />
          <Feature
            title="Skilled team"
            desc="Designers, engineers, and product thinkers working together."
          />
        </motion.div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
