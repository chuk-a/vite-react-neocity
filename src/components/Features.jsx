const features = [
  {
    title: "Smart Control",
    description: "Control heating remotely via app or voice assistant.",
  },
  {
    title: "Energy Efficient",
    description: "Save on utility bills with optimized energy use.",
  },
  {
    title: "Custom Designs",
    description: "Tailored solutions for residential and commercial spaces.",
  },
];

export default function Features() {
  return (
    <section className="py-16 bg-white">
      <div className="container-narrow">
        <h2 className="text-2xl md:text-3xl font-bold text-center font-display text-brand-700">
          Key Features
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg border bg-white shadow-sm hover:shadow transition"
            >
              <h3 className="text-xl font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-gray-600">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}