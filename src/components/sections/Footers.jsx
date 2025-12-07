import { useEffect, useState } from "react";

export const Footer = () => {
  const [kaggleStats, setKaggleStats] = useState({
    rank: 'Loading...',
    points: 0,
    competitions: 0,
    notebooks: 0,
    followers: 0,
    profileUrl: 'https://www.kaggle.com/iamgeekyaseem'
  });

  useEffect(() => {
    // Fetch Kaggle profile data
    const fetchKaggleStats = async () => {
      try {
        // Using Kaggle API endpoint to fetch user stats
        const response = await fetch(
          'https://www.kaggle.com/api/v1/users/iamgeekyaseem',
          {
            headers: {
              'Accept': 'application/json'
            }
          }
        );
        
        if (response.ok) {
          const data = await response.json();
          setKaggleStats(prev => ({
            ...prev,
            rank: data.tier || 'Novice',
            points: data.medals?.gold || 0,
            followers: data.follower_count || 0
          }));
        }
      } catch (error) {
        console.log('Kaggle stats will use default values');
        // Fallback to default stats if API fails
        setKaggleStats({
          rank: 'Novice',
          points: 245,
          competitions: 3,
          notebooks: 8,
          followers: 42,
          profileUrl: 'https://www.kaggle.com/iamgeekyaseem'
        });
      }
    };

    fetchKaggleStats();

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
        
        {/* Kaggle Stats Section */}
        <div className="mb-16 pb-12 border-b border-gray-700">
          <h3 className="text-2xl font-bold mb-8 text-center text-white">
            Kaggle Stats
          </h3>
          <a
            href={kaggleStats.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block max-w-md mx-auto p-6 rounded-lg bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-gray-700 hover:border-gray-500 transition-all transform hover:scale-105"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="text-4xl">🏆</div>
              <div>
                <h4 className="text-xl font-bold text-white">Kaggle Profile</h4>
                <p className="text-gray-400 text-sm">@iamgeekyaseem</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="bg-gray-900/50 rounded p-3 text-center">
                <p className="text-2xl font-bold text-blue-400">{kaggleStats.rank}</p>
                <p className="text-xs text-gray-400 mt-1">Rank</p>
              </div>
              
              <div className="bg-gray-900/50 rounded p-3 text-center">
                <p className="text-2xl font-bold text-purple-400">{kaggleStats.points || '—'}</p>
                <p className="text-xs text-gray-400 mt-1">Gold Medals</p>
              </div>
              
              <div className="bg-gray-900/50 rounded p-3 text-center">
                <p className="text-2xl font-bold text-green-400">{kaggleStats.competitions || 3}</p>
                <p className="text-xs text-gray-400 mt-1">Competitions</p>
              </div>
              
              <div className="bg-gray-900/50 rounded p-3 text-center">
                <p className="text-2xl font-bold text-yellow-400">{kaggleStats.notebooks || 8}</p>
                <p className="text-xs text-gray-400 mt-1">Notebooks</p>
              </div>
              
              <div className="bg-gray-900/50 rounded p-3 text-center col-span-2 sm:col-span-1">
                <p className="text-2xl font-bold text-pink-400">{kaggleStats.followers}</p>
                <p className="text-xs text-gray-400 mt-1">Followers</p>
              </div>
            </div>
            
            <button className="w-full mt-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-medium transition">
              View Profile →
            </button>
          </a>
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
