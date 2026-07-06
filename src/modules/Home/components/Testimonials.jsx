const testimonials = [
  {
    id: 1,
    name: "Amaka Okafor",
    role: "Product Manager",
    quote:
      "Their team transformed our product roadmap — delivery was fast and the results were outstanding.",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=256&q=80",
  },
  {
    id: 2,
    name: "Daniel Uche",
    role: "Founder, Startup",
    quote:
      "Excellent collaboration and attention to detail. Our users loved the redesign.",
    avatar:
      "https://images.unsplash.com/photo-1545996124-1f26d5b2a1f7?auto=format&fit=crop&w=256&q=80",
  },
  {
    id: 3,
    name: "Chinwe Nwosu",
    role: "CTO",
    quote:
      "Skilled engineers and clear communication — shipping features became effortless.",
    avatar:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=256&q=80",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-16">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            Testimonials
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-gray-900">What clients say</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Real feedback from teams we've partnered with.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote
              key={t.id}
              className="rounded-xl border border-gray-100 bg-gray-50 p-6"
            >
              <p className="text-gray-700">“{t.quote}”</p>
              <div className="mt-4 flex items-center">
                <img src={t.avatar} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
                <div className="ml-3">
                  <div className="text-sm font-semibold text-gray-900">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.role}</div>
                </div>
              </div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
