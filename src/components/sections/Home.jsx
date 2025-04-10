import { RevealOnScroll } from "../RevealOnScroll";
import image from "../../../public/Aseem_G.jpeg";

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
            src={image}
            alt="Priyanka"
            className="rounded-2xl shadow-xl w-70 h-70 object-cover"
          />
        </div>

        {/* Right: Text Content */}
        <RevealOnScroll>
          <div className="w-full mr-50 text-center mt-25 md:text-left z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-200 bg-clip-text text-transparent leading-tight">
              Hi, I'm Aseem Gupta
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-4xl text-justify">
              I'm a Full Stack Developer and Machine Learning enthusiat in
              India. I love to build web applications and learn new
              technologies. I'm currently working on building my portfolio
              website.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              >
                View Blog
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
