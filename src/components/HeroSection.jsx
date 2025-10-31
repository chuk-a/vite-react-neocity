export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-600 via-brand-700 to-brand-800"></div>
      <svg className="absolute -top-10 -right-10 opacity-20" width="400" height="400">
        <circle cx="200" cy="200" r="200" fill="white"></circle>
      </svg>
      <div className="relative container-narrow py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white font-display">
          Heating System Design
        </h1>
        <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
          Efficient, modern heating solutions engineered for comfort and energy savings.
        </p>
        <div className="mt-8">
          <a href="/contact" className="btn-primary">Get a Quote</a>
        </div>
      </div>
    </section>
  );
}