import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-200 bg-clip-text text-transparent leading-tight">
            Contact Me
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            Feel free to reach out to me through the link below.
          </p>
          <div className="flex justify-center">
            <a
              href="https://linktr.ee/thegeekyguy"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 256, 0.4)]"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};