import { useEffect } from "react";

export const Footer = () => {
  const techStack = [
    { name: 'Python', icon: '🐍', color: 'from-blue-500 to-blue-600' },
    { name: 'TensorFlow', icon: '🧠', color: 'from-orange-500 to-orange-600' },
    { name: 'PyTorch', icon: '⚡', color: 'from-red-500 to-red-600' },
    { name: 'YOLO', icon: '🎯', color: 'from-purple-500 to-purple-600' },
    { name: 'React', icon: '⚛️', color: 'from-cyan-500 to-cyan-600' },
    { name: 'Docker', icon: '🐳', color: 'from-blue-400 to-blue-500' },
    { name: 'SQL', icon: '💾', color: 'from-green-500 to-green-600' },
    { name: 'Git', icon: '🔗', color: 'from-orange-600 to-orange-700' },
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
        {/* Tech Stack Visual Section */}
        <div className="mb-16 pb-12 border-b border-gray-700">
          <h3 className="text-2xl font-bold mb-8 text-center text-white">
            Tech Stack
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 p-3 rounded-lg bg-gray-900/50 hover:bg-gray-800 transition-all transform hover:scale-105"
              >
                <div className={`text-4xl mb-1`}>{tech.icon}</div>
                <p className="text-xs font-medium text-gray-300 text-center">{tech.name}</p>
              </div>
            ))}
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
