import React, { useState } from 'react';

interface BlogPost {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
}

export const BlogPage: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Getting Started with Image Conversion',
      content: 'Learn the basics of image conversion and optimization...',
      author: 'John Doe',
      date: '2024-03-15'
    },
    {
      id: 2,
      title: 'Best Practices for PDF Management',
      content: 'Discover efficient ways to handle PDF files in web applications...',
      author: 'Jane Smith',
      date: '2024-03-16'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Blog</h1>
      
      {!selectedPost ? (
        <div className="grid gap-6 md:grid-cols-2">
          {blogPosts.map((post) => (
            <div 
              key={post.id}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              <h2 className="text-xl font-semibold mb-2 text-gray-800">{post.title}</h2>
              <p className="text-gray-600 mb-2">By {post.author}</p>
              <p className="text-gray-500 text-sm">{post.date}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <button
            className="mb-4 text-blue-600 hover:text-blue-800 font-medium"
            onClick={() => setSelectedPost(null)}
          >
            ← Back to List
          </button>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">{selectedPost.title}</h2>
          <div className="prose max-w-none">{selectedPost.content}</div>
        </div>
      )}
    </div>
  );
};
