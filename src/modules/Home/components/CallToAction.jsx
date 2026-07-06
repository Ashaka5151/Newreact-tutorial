export default function CallToAction() {
  return (
    <section className="bg-blue-600 py-14">
      <div className="container mx-auto max-w-4xl px-6 text-center text-white">
        <h2 className="text-3xl font-semibold">Ready to get started?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-lg opacity-90">
          Talk to our team and launch your next product with confidence.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <a href="#contact" className="inline-flex items-center rounded-md bg-white px-5 py-3 text-sm font-medium text-blue-600 shadow hover:opacity-95">
            Contact sales
          </a>
          <a href="#pricing" className="inline-flex items-center rounded-md border border-white/30 px-5 py-3 text-sm font-medium text-white hover:opacity-95">
            View pricing
          </a>
        </div>
      </div>
    </section>
  );
}
