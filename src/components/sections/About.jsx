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
    "UI/UX Design",
  ];

  const backendSkills = [
    "Python",
    "SQL",
    "Docker",
    "Git",
    "Node.js",
    "Express",
    "MongoDB",
  ];

  const mlSkills = [
    "Computer Vision",
    "Deep Learning",
    "YOLOv5",
    "TensorFlow",
    "PyTorch",
    "Machine Learning",
    "Data Analysis",
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
              I'm an AI/ML Engineer based in Bengaluru, India, specializing in Computer Vision, Deep Learning, and Biomedical AI. I build intelligent systems and ML pipelines for real-world applications, particularly in biomedical imaging and 3D bioprinting automation. With 4+ years of design experience, I combine technical expertise with creative problem-solving to develop scalable AI solutions.
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
                <h3 className="text-xl font-bold mb-4">Backend & Tools</h3>
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

            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all mt-6">
              <h3 className="text-xl font-bold mb-4">AI/ML & Data Science</h3>
              <div className="flex flex-wrap gap-2">
                {mlSkills.map((skill, key) => (
                  <span
                    key={skill}
                    className="bg-purple-500/10 text-purple-400 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(168, 85, 247, 0.2)] transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-row-1 md:grid-row-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 text-blue-300">
                Education
              </h3>
              <ul className="list-disc list-outside text-gray-300 space-y-2">
                <li>
                  <strong>B.Tech in Biotechnology</strong> - National Institute
                  of Technology Andhra Pradesh (Dec. 2021– June 2025)
                </li>
                <li>
                  <strong>DAV Public School</strong>, Science (PCM) (Aug. 2018– May 2020)
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
                      AI/ML Engineer - Next Big Innovation Labs (NBIL) - (July 2025 – Present)
                    </strong>
                  </h4>
                  <p className="text-gray-400 text-sm mt-1 mb-2">Bengaluru, Karnataka</p>
                  <p>
                    <ul className="list-disc list-outside text-gray-300 space-y-2 text-sm">
                      <li>
                        Engineered a full-stack Real-Time Quality Control-Dynamic Pressure Regulation (RTQC-DPR) application for 3D bioprinters, automating the entire calibration-to-print pipeline and reducing setup time by over 50%.
                      </li>
                      <li>
                        Developed the AI core by training a custom YOLO keypoint model on an augmented dataset of over 9,000 images for vision-based Z-axis measurement, and implementing Scikit-learn/SciPy models to generate a 3D compensation mesh for automated bed leveling.
                      </li>
                      <li>
                        Built the complete system with a multithreaded Python backend for asynchronous serial communication (G-code) and a comprehensive PyQt5 operator dashboard with live video and Matplotlib data visualization.
                      </li>
                      <li>
                        Gained foundational knowledge of Marlin firmware by troubleshooting the G-code control sequence to successfully implement and refine the automatic bed leveling process.
                      </li>
                    </ul>
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold">
                    <strong>
                      Summer Research Intern - IIT Hyderabad - (May 2023 – July 2023)
                    </strong>
                  </h4>
                  <p className="text-gray-400 text-sm mt-1 mb-2">Hyderabad, Telangana</p>
                  <p>
                    <ul className="list-disc list-outside text-gray-300 space-y-2 text-sm">
                      <li>
                        Developed a deep learning solution for quantification of fluorescent dots: Application in diagnosis of Diabetic retinopathy.
                      </li>
                      <li>
                        Implemented and fine-tuned YOLOv5 algorithm & custom-trained model using 500+ microscopic images.
                      </li>
                      <li>
                        Improved accuracy to 94% by leveraging data augmentation, noise reduction, model evaluation metrics and image scaling to enhance feature detection efficiency.
                      </li>
                    </ul>
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold">
                    <strong>
                      Research Intern - IIT Kharagpur - (June 2024 – Aug. 2024)
                    </strong>
                  </h4>
                  <p>
                    <ul className="list-disc list-outside text-gray-300 space-y-2 text-sm">
                      <li>
                        IEEE EMBS SBC Program internship on Retinal Prostheses as Potential Therapies for Degenerative Retinal Diseases.
                      </li>
                      <li>
                        Implemented biomedical imaging preprocessing and modelling for simulating retinal stimulation.
                      </li>
                    </ul>
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold">
                    <strong>
                      Lead Designer - TEDx NIT Andhra Pradesh - (Aug 2024 – Oct. 2024)
                    </strong>
                  </h4>
                  <p className="text-gray-400 text-sm mt-1">Directed all design & branding, led designer team for TEDx NITAP'24.</p>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 text-blue-300">
                Certifications & Awards
              </h3>
              <ul className="list-disc list-outside text-gray-300 space-y-2">
                <li>
                  <strong>Project Abstract Published</strong> - 4th International Conference on Bioprocess for Sustainable Environment and Energy, 2025
                </li>
                <li>
                  <strong>E-Summit'23 Participation</strong> - IIT Bombay 
                </li>
                <li>
                  <strong>Senior Outreach Manager</strong> - Google Developer Groups, 2023 (Responsible for securing sponsorships)
                </li>
                <li>
                  <strong>Marketing/Communications & Design Lead</strong> - TEDx NIT Andhra Pradesh, 2024
                </li>
                <li>
                  <strong>Secretary</strong> - Biotechnology Engineering Association (BEA), 2024-25
                </li>
                <li>
                  <strong>Event Participation</strong> - Next-Gen Biofabrication: Innovations in 3D Bioprinting and Functional Biomaterials
                </li>
                <li>
                  <strong>Conference Participation</strong> - 5th International Conference on Renewable Energy, Sustainable Environment, Agricultural and Artificial Intelligence Technologies
                </li>
                <li>
                  <strong>Conference Participation</strong> - International Conference on Nano Structured Materials and Nanocomposites
                </li>
              </ul>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
