import { useEffect } from "react";

export const Footer = () => {
  const projects = [
    {
      name: 'Toxicity Analysis of Dye',
      description: 'Predictive modeling with fuzzy logic',
      stars: 24,
      forks: 8,
      url: 'https://github.com/iamgeekyaseem/Toxicity-Analysis-of-Dye',
      language: 'Python'
    },
    {
      name: 'Video RAG Q&A Bot',
      description: 'End-to-end RAG pipeline using Whisper & ChromaDB',
      stars: 18,
      forks: 5,
      url: 'https://github.com/iamgeekyaseem/Video-RAG-QA-Bot',
      language: 'Python'
    },
    {
      name: 'Geeky-Aseem Portfolio',
      description: 'Modern portfolio built with React & Vite',
      stars: 12,
      forks: 3,
      url: 'https://github.com/iamgeekyaseem/Geeky-Aseem',
      language: 'JavaScript'
    }
  ];

  useEffect(() => {
    // If script already exists, just reload widgets
    if (window.twttr && window.twttr.widgets) {
      window.twttr.widgets.load();
      return;
    }

    // Create script
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    script.onload = () => {
      if (window.twttr && window.twttr.widgets) {
        window.twttr.widgets.load();
      }
    };

    document.body.appendChild(script);
  }, []);

  return (
    <footer className=" text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Featured on GitHub Section */}
        <div className="mb-16 pb-12 border-b border-gray-700">
          <h3 className="text-2xl font-bold mb-8 text-center text-white">
            Featured on GitHub
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-lg bg-gray-900/50 border border-gray-700 hover:border-gray-500 transition-all transform hover:scale-105 hover:shadow-lg"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white group-hover:text-gray-200 transition">
                      {project.name}
                    </h4>
                    <span className="inline-block mt-2 px-2 py-1 text-xs font-medium bg-gray-800 text-gray-300 rounded">
                      {project.language}
                    </span>
                  </div>
                  <span className="text-2xl">📂</span>
                </div>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1 hover:text-yellow-400 transition">
                    ⭐ {project.stars}
                  </span>
                  <span className="flex items-center gap-1 hover:text-blue-400 transition">
                    🍴 {project.forks}
                  </span>
                </div>
              </a>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <a
              href="https://github.com/iamgeekyaseem"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gray-800 hover:bg-gray-700 text-white py-2 px-6 rounded-full font-medium transition border border-gray-700 hover:border-gray-600"
            >
              View All Projects on GitHub →
            </a>
          </div>
        </div>
        
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Latest Updates
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="flex justify-center">
              <blockquote className="twitter-tweet" data-theme="dark">
                <a href="https://twitter.com/iamgeekyaseem/status/1973756496875061690"></a>
              </blockquote>
            </div>

            <div className="flex justify-center">
              <blockquote className="twitter-tweet" data-theme="dark">
                <a href="https://twitter.com/iamgeekyaseem/status/1973127786744467464"></a>
              </blockquote>
            </div>

            <div className="flex justify-center">
              <blockquote className="twitter-tweet" data-theme="dark">
                <a href="https://twitter.com/iamgeekyaseem/status/1974157103964287026"></a>
              </blockquote>
            </div>

          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <div>
              <h4 className="text-lg font-bold mb-2">Aseem Gupta</h4>
              <p className="text-gray-400 text-sm">AI/ML Engineer | Computer Vision & Deep Learning</p>
            </div>

            <div className="flex gap-6 mt-4 md:mt-0">
              <a className="text-gray-400 hover:text-blue-400 transition" href="https://twitter.com/theaseemgupta">Twitter</a>
              <a className="text-gray-400 hover:text-blue-400 transition" href="https://github.com/iamgeekyaseem">GitHub</a>
              <a className="text-gray-400 hover:text-blue-400 transition" href="https://linkedin.com/in/theaseemgupta">LinkedIn</a>
            </div>
          </div>

          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Aseem Gupta. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
