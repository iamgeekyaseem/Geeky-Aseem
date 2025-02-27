import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Sass",
    "Figma",
    "Photoshop",
    "Pro Create",
    "UI/UX Design",
  ];

  const backendSkills = [
    "Node.js",
    "Express",
    "MongoDB",
    "RESTful APIs",
    "SQL",
    "Python",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              I'm a web developer based in the India. I specialize in building
              websites and web applications using modern web technologies.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((skill, key) => (
                    <span
                      key={skill}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 224, 0.2)] transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((skill, key) => (
                    <span
                      key={skill}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 224, 0.2)] transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-row-1 md:grid-row-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 text-blue-300">
                Education
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>B.Tech in Biotechnology</strong> - National Institute
                  of Technology Andhra Pradesh (Dec. 2021– Aug. 2025)
                </li>
                <li>
                  Relevant Coursework:{" "}
                  <strong>
                    Data Structures and Algorithms, Web Development, Machine
                    Learning
                  </strong>
                </li>
                <li>
                  <strong>DAV Public School</strong>, Senior Secondary Education
                  ( Aug. 2018– May 2020)
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 text-blue-300">
                Work Experience
              </h3>
              <div className="space-y-4 text-gray-300 ">
                <div>
                  <h4 className="text-lg font-bold">
                    <strong>
                      Summer Research Intern - IIT Hyderabad - (May 2023– July
                      2023)
                    </strong>
                  </h4>
                  <p>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      <li>
                        Developed a deep learning solution for quantification of
                        fluorescent dots: Application in diagnosis of Diabetic
                        retinopathy.
                      </li>
                      <li>
                        Applied YOLOv5 algorithm & custom-trained model using
                        500+ microscopic images.
                      </li>
                      <li>
                        Improved accuracy to 94% by integrating a noise
                        reduction function to remove background interference and
                        implemented image scaling to enhance feature detection
                        efficiency
                      </li>
                    </ul>
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold">
                    <strong>
                      IEEE EMBS SBC Program, Intern IIT Kharagpur - (June 2024 –
                      Oct. 2024)
                    </strong>
                  </h4>
                  <p>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      <li>
                        Analyzed over 50+ peer-reviewed studies to identify
                        current trends, challenges on retinal prostheses as
                        potential therapeutics.
                      </li>
                      <li>
                        The design and modeling of a microelectrode were carried
                        out by me using COMSOL Multiphysics software.
                      </li>
                    </ul>
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold">
                    <strong>
                      Freelance Graphic Designer - (April 2024 – Sept. 2024)
                    </strong>
                  </h4>
                  <p>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      <li>
                        Worked for publishing of monthly white papers,
                        brochures, and social media content for a product
                        management company called ShorterLoop.
                      </li>
                      <li>
                        Worked for TEDx NIT Andhra Pradesh for designing
                        posters, social media content that immensely increased
                        the reach of the event upto 300k+ audience.
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
