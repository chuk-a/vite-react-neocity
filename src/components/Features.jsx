const features = [
  {
    title: "Smart Control",
    description: "Automate heating remotely via app or voice assistant.",
  },
  {
    title: "Energy Efficient",
    description: "Save on bills with optimized energy consumption.",
  },
  {
    title: "Custom Designs",
    description: "Tailored heating solutions for all building types.",
  },
];

export default function Features() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, idx) => (
            <div key={idx} className="p-6 border rounded shadow text-center">
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
