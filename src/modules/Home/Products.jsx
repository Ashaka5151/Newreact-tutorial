const products = [
  {
    id: 1,
    title: "Aurora Smart Lamp",
    price: "$89",
    description:
      "A minimal smart lamp with ambient lighting modes and voice control support.",
    image:
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    title: "Nimbus Headphones",
    price: "$149",
    description:
      "Studio-quality wireless headphones designed for comfort and immersive sound.",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    title: "Lumen Watch",
    price: "$199",
    description:
      "A sleek smartwatch with fitness tracking and a premium stainless steel finish.",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    title: "Terra Backpack",
    price: "$79",
    description:
      "Travel-ready, weather-resistant storage with smart compartments for everyday use.",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    title: "Nova Camera",
    price: "$249",
    description:
      "Compact camera with crisp image quality and intuitive controls for creators.",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 6,
    title: "Solstice Chair",
    price: "$129",
    description:
      "Ergonomic seating crafted to bring comfort and style into modern workspaces.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
  },
];

function Products() {
  return (
    <div className="px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            Featured products
          </p>
          <h1 className="mt-3 text-4xl font-bold text-gray-800">
            Discover our latest picks
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Browse a curated collection of premium products built for comfort,
            style, and everyday performance.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.id}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-56 w-full object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {product.title}
                  </h2>
                  <span className="text-sm font-medium text-blue-600">
                    {product.price}
                  </span>
                </div>
                <p className="mt-3 text-gray-600">{product.description}</p>
                <button className="mt-5 rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-700">
                  View details
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
