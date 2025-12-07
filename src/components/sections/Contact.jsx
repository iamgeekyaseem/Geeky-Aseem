import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4 max-w-2xl">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-200 bg-clip-text text-transparent leading-tight">
            Contact Me
          </h2>
          <p className="text-gray-400 text-lg mb-2 max-w-lg mx-auto">
            Let's connect! Feel free to reach out to me through any of these channels.
          </p>
          <p className="text-purple-400 text-base mb-8 max-w-lg mx-auto font-medium">
            Available for collaboration on AI/ML projects
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap mb-8">
            <a
              href="mailto:iamgeekyaseem@gmail.com"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 256, 0.4)]"
            >
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/theaseemgupta"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/iamgeekyaseem"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
            >
              GitHub
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <a
              href="https://calendly.com/iamgeekyaseem/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]"
            >
              Schedule a Meeting
            </a>
            <a
              href="/resume.pdf"
              download
              className="border border-purple-500/50 text-purple-400 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(168,85,247,0.2)] hover:bg-purple-500/10"
            >
              Download Resume
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};