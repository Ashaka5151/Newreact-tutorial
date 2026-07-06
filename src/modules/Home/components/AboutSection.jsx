import { motion } from "framer-motion";

function AboutSection() {
  return (
    <section id="about" className="bg-white py-16">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-semibold text-gray-900">About Us</h2>
            <p className="mt-4 text-lg text-gray-600">
              We build products and services that help people and businesses
              achieve more. Our team combines deep expertise with a practical,
              customer-first approach to deliver measurable results.
            </p>
            <p className="mt-4 text-gray-600">
              From design to delivery, we focus on clarity, quality, and speed.
              We partner closely with clients to understand their goals and
              turn them into delightful experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8 shadow">
              <div className="h-56 w-full rounded-lg bg-gradient-to-br from-amber-200 via-amber-300 to-rose-200 flex items-center justify-center text-amber-800 font-semibold">
                Our mission: create value people love
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
