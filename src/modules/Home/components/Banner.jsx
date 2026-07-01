import { motion } from "framer-motion";
import heroImage from "../../../assets/hero.png";

function Banner() {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col justify-center"
        >
          <span className="mb-4 inline-flex w-fit rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
            Welcome to our landing experience
          </span>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Build trust with a polished banner that tells your story.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-200 sm:text-xl">
            Showcase your brand, highlight your value, and guide visitors with a clear message that feels modern, confident, and welcoming.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#products"
              className="rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
            >
              Explore products
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Contact us
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="rounded-3xl border border-white/10 bg-white/10 p-3 shadow-2xl shadow-black/20 backdrop-blur"
        >
          <img
            src={heroImage}
            alt="Modern banner illustration"
            className="h-full w-full rounded-2xl object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Banner;
