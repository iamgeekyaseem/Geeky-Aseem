import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-4"
    >
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Left: Profile Image */}
        <div className="w-full md:w-1/2 flex justify-center mt-30">
          <img
            src="/Aseem_G.jpeg"
            alt="Aseem Gupta"
            className="rounded-2xl shadow-xl w-70 h-70 object-cover"
          />
        </div>

        {/* Right: Text Content */}
        <RevealOnScroll>
          <div className="w-full mr-50 text-center mt-25 md:text-left z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-200 bg-clip-text text-transparent leading-tight">
              Hi, I'm Aseem Gupta
            </h1>
            <p className="text-gray-400 text-lg mb-2 max-w-4xl text-justify">
              AI/ML Engineer | Computer Vision & Deep Learning | BioTech AI | Ex-IIT Research Intern | Designer (UI/UX & Graphics)
            </p>
            <p className="text-gray-400 text-lg mb-8 max-w-4xl text-justify">
              I'm an AI/ML Engineer specializing in Computer Vision, Deep Learning, and Biomedical AI. Currently at Next Big Innovation Labs (NBIL), I build intelligent systems for 3D bioprinting automation. With a B.Tech in Biotechnology from NIT Andhra Pradesh and research internships at IIT Kharagpur and IIT Hyderabad, I'm passionate about developing ML pipelines for biomedical imaging.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
              >
                Contact Me
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
