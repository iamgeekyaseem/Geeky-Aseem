import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
              <h2 className="text-xl font-bold mb-2">
                Toxicity Analysis of Dye
              </h2>
              <p className="text-gray-400 mb-6">
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    Developed a fuzzy logic-based model for the biosorption of
                    toxic dye using Trichoderma harzianum.
                  </li>
                  <li>
                    Applied machine learning models to analyze and predict the
                    adsorption capacity.
                  </li>
                  <li>
                    Comparative test using models like SVR, Random Forest,
                    Decision Tree, XGBoost, and ANN.
                  </li>
                  <li>Achieved a prediction accuracy of 95%.</li>
                </ul>
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "Machine Learning", "Fuzzy Logic"].map(
                  (skill, key) => (
                    <span
                      key={skill}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 224, 0.2)] transition"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/iamgeekyaseem/Adsorption-of-Dye-Comparative-Study-Models"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
              <h2 className="text-xl font-bold mb-2">Nerds-Connect</h2>
              <p className="text-gray-400 mb-6">
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    Developed a full-stack social media web application using
                    Node.js, Express.js, and EJS for server-side rendering and
                    dynamic content generation.
                  </li>
                  <li>
                    Implemented database management with MongoDB and integrated
                    authentication mechanisms for secure access.
                  </li>
                  <li>
                    Enhanced user interaction using Socket.io for real-time
                    communication, and styled with SASS for scalable CSS.
                  </li>
                </ul>
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "Node.js",
                  "Express",
                  "EJS",
                  "MongoDB",
                  "SASS",
                  "AJAX",
                  "RESTfulAPIs",
                  "Git",
                ].map((skill, key) => (
                  <span
                    key={skill}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 224, 0.2)] transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/iamgeekyaseem/Nerds-Connect"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
              <h2 className="text-xl font-bold mb-2">Cine World</h2>
              <p className="text-gray-400 mb-6">
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    Developed a front-end web application using React.js for
                    component-based UI & state management.
                  </li>
                  <li>
                    Integrated the OMDb API to fetch real-time movie data,
                    including details like title, genre, ratings, and reviews.
                  </li>
                </ul>
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React.js", "HTML/CSS", "JavaScript"].map((skill, key) => (
                  <span
                    key={skill}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 224, 0.2)] transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/iamgeekyaseem/CineWorld"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
              <h2 className="text-xl font-bold mb-2">
                Dad-Jokes Chrome Extention
              </h2>
              <p className="text-gray-400 mb-6">
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>One of my first basic project using HTML/JavaScript</li>
                  <li>
                    Uses API to fetch JSON and scrape the data to display jokes.
                  </li>
                  <li>
                    A fun personal project to learn about Chrome Extentions.
                  </li>
                </ul>
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["JavaScript", "HTML", "APIs"].map((skill, key) => (
                  <span
                    key={skill}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 224, 0.2)] transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/iamgeekyaseem/Dad-Joke-Chrome-Extention"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
