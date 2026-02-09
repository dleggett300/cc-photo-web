import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About | David Leggett Photo Services" },
    {
      name: "description",
      content:
        "Learn about David Leggett and his journey into photography.",
    },
  ];
}

export default function About() {
  return (
    <>
      {/* Page Header */}
      <section className="py-20 px-6 text-center">
        <h1 className="font-display text-4xl md:text-5xl font-semibold text-gray-900 dark:text-white mb-4">
          About
        </h1>
        <p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto italic">
          In pursuit of telling stories.
        </p>
      </section>

      {/* Body */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 md:order-1">
              <img
                src="/images/generated/about.jpg"
                alt="David Leggett - Professional Photographer"
                className="w-full h-auto rounded-lg shadow-lg object-cover max-h-[600px]"
              />
            </div>
            {/* Text */}
            <div className="order-1 md:order-2 space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                Born in Ottawa Canada but promptly moving country-to-country
                starting at the age of 4, I spent my most formative years collecting
                new and unique experiences in new and unique places. Through these, I
                quickly gained an appreciation for art and design. Through travel I
                have discovered so many stories that deserve to be immortalized
                through a camera lens. My experiences both inspire me to create and
                teach me that there is always something new to learn.
              </p>
              <p>
                I find fulfillment in all kinds of creative projects. From
                showcasing unique products, to portraiture, to real estate, I know
                that big or small, everything has a story to tell.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
