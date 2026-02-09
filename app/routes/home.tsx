import type { Route } from "./+types/home";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "David Leggett Photo Services" },
    {
      name: "description",
      content:
        "Professional photography services in Nashville, TN. Portraits, events, weddings, and commercial photography.",
    },
  ];
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center bg-gray-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(/images/generated/hero.jpg)",
          }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="font-display text-5xl md:text-7xl font-semibold text-white mb-6 leading-tight">
            Moments Worth
            <br />
            Remembering
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl mx-auto">
            Professional photography that tells your story with elegance and
            authenticity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/gallery"
              className="inline-block px-8 py-3 bg-white text-gray-900 font-medium text-sm tracking-wide rounded hover:bg-gray-100 transition-colors"
            >
              View Gallery
            </Link>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 border border-white text-white font-medium text-sm tracking-wide rounded hover:bg-white/10 transition-colors"
            >
              Book a Session
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white text-center mb-4">
            Services
          </h2>
          <p className="text-center text-gray-500 dark:text-gray-400 mb-16 max-w-lg mx-auto">
            From intimate portraits to large-scale events, every session is
            crafted with intention.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Product",
                description:
                  "Stunning product photography in varied settings, with masterful lighting and meticulous attention to detail that makes every item shine.",
                image: "/images/73_07806-2.jpg",
              },
              {
                title: "Outdoors",
                description:
                  "Breathtaking outdoor photography that harnesses natural light and sweeping landscapes to create vivid, authentic imagery with depth and atmosphere.",
                image: "/images/DML06635-2.jpg",
              },
              {
                title: "Fine Art",
                description:
                  "Evocative fine art photography that blends creative vision with technical precision, transforming moments into timeless, gallery-worthy pieces.",
                image: "/images/DSC04298-2.jpg",
              },
            ].map((service) => (
              <div key={service.title} className="group">
                <div className="aspect-[4/5] overflow-hidden rounded-lg mb-4">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-display text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-[#F5F4F1] dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white text-center mb-4">
            What Clients Say
          </h2>
          <p className="text-center text-gray-500 dark:text-gray-400 mb-16 max-w-lg mx-auto">
            Hear from a few of the people who trusted us with their vision.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "David photographed our entire product line for our spring catalog and the results were incredible. Every shot had this clean, elevated feel that matched our brand perfectly. Sales jumped the quarter after we launched the new imagery.",
                name: "Rachel Simmons",
                project: "Product Campaign",
              },
              {
                quote:
                  "We hired David for a weekend shoot at our ranch property and he captured the landscape in ways we never could have imagined. He has an instinct for finding the right light at the right moment. The prints are now hanging in our home and we still stop to admire them.",
                name: "Marcus & Elena Torres",
                project: "Outdoor Session",
              },
              {
                quote:
                  "Working with David on my fine art series was a truly collaborative experience. He understood the mood and concept I was going for from the very first conversation. The final pieces were exhibited at a local gallery and received wonderful feedback.",
                name: "James Whitfield",
                project: "Fine Art Collection",
              },
            ].map((testimonial) => (
              <blockquote
                key={testimonial.name}
                className="flex flex-col justify-between bg-[#FAF9F6] dark:bg-gray-800 rounded-lg p-8"
              >
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed italic mb-6">
                  "{testimonial.quote}"
                </p>
                <footer>
                  <p className="font-display font-semibold text-gray-900 dark:text-white text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                    {testimonial.project}
                  </p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-4">
            Let's Create Something Beautiful
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8">
            Every great photo starts with a conversation. Reach out to discuss
            your vision and let's plan your session.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium text-sm tracking-wide rounded hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
