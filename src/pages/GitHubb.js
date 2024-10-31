import React, { useState, useEffect } from 'react';
import CosmicLayout from '../components/CosmicLayout';
import { motion } from 'framer-motion';

const GitHubb = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/YOUR_GITHUB_USERNAME/repos');
        const data = await response.json();
        setRepos(data.slice(0, 6)); // Limit to 6 repos
        setLoading(false);
      } catch (error) {
        console.error('Error fetching GitHub repos', error);
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <CosmicLayout>
      <div className="space-y-8">
        <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          GitHub Galaxy
        </h2>
        
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"></div>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {repos.map((repo, index) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-blue-900/50 hover:border-blue-500/50 transition-all space-y-4"
              >
                <h3 className="text-xl font-semibold text-blue-300 truncate">
                  {repo.name}
                </h3>
                <p className="text-gray-400 text-sm line-clamp-2">
                  {repo.description || 'No description'}
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>★ {repo.stargazers_count}</span>
                  <span>{repo.language}</span>
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </CosmicLayout>
  );
};

export default GitHubb;