import React from 'react';
import { useNavigate } from 'react-router-dom';


const blogPosts = [
    {
      id: 1,
      title: 'The Future of Vehicle Management',
      author: 'John Doe',
      date: 'August 10, 2024',
      summary: 'Explore the latest trends in vehicle management systems and how they are transforming the automotive industry.',
    },
    {
      id: 2,
      title: 'Top 5 Features of Modern Fleet Tracking',
      author: 'Jane Smith',
      date: 'July 25, 2024',
      summary: 'Discover the top features you should look for in modern fleet tracking solutions to boost efficiency and safety.',
    },
    {
      id: 3,
      title: 'How AI is Revolutionizing Transportation',
      author: 'Alice Johnson',
      date: 'August 5, 2024',
      summary: 'Learn how artificial intelligence is changing the way we approach transportation and what it means for the future.',
    },
    {
      id: 4,
      title: 'The Rise of Electric Vehicles: What to Expect',
      author: 'Michael Brown',
      date: 'July 30, 2024',
      summary: 'Examine the growth of electric vehicles and what changes are on the horizon for the automotive market.',
    },
    {
      id: 5,
      title: 'Essential Tips for Fleet Maintenance',
      author: 'Emily Davis',
      date: 'August 2, 2024',
      summary: 'Get practical advice on maintaining your fleet to ensure longevity and peak performance.',
    },
    {
      id: 6,
      title: 'Navigating the Challenges of Autonomous Vehicles',
      author: 'Robert Wilson',
      date: 'July 20, 2024',
      summary: 'Understand the challenges faced by autonomous vehicles and the ongoing efforts to overcome them.',
    },
    {
      id: 7,
      title: 'Sustainable Practices in Fleet Management',
      author: 'Laura Taylor',
      date: 'August 1, 2024',
      summary: 'Explore how fleet management can be more environmentally friendly and the benefits of adopting sustainable practices.',
    },
    {
      id: 8,
      title: 'Data Security in Vehicle Management Systems',
      author: 'Daniel Martinez',
      date: 'July 18, 2024',
      summary: 'Delve into the importance of data security in vehicle management systems and how to protect sensitive information.',
    },
    {
      id: 9,
      title: 'The Role of Telematics in Modern Fleet Management',
      author: 'Sophia Lee',
      date: 'August 7, 2024',
      summary: 'Learn about the role of telematics in fleet management and how it contributes to operational efficiency.',
    },
    {
      id: 10,
      title: 'Innovations in Vehicle Safety Technology',
      author: 'James White',
      date: 'July 12, 2024',
      summary: 'Discover the latest advancements in vehicle safety technology and their impact on reducing accidents and improving safety.',
    },
    {
      id: 11,
      title: 'How to Optimize Your Fleet for Fuel Efficiency',
      author: 'Olivia Harris',
      date: 'August 8, 2024',
      summary: 'Find out how to optimize your fleet operations to achieve better fuel efficiency and reduce operational costs.',
    },
    {
      id: 12,
      title: 'The Impact of Connected Vehicles on Traffic Management',
      author: 'Ethan Clark',
      date: 'July 28, 2024',
      summary: 'Explore how connected vehicles are influencing traffic management systems and what it means for urban mobility.',
    },
];

const Blog = () => {
    const navigate = useNavigate(); // Initialize the navigate hook

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Blog Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4">{post.title}</h2>
              <p className="text-gray-600 mb-2">
                By {post.author} on {post.date}
              </p>
              <p className="text-gray-700">{post.summary}</p>
              <button
                onClick={() => navigate(`/blog/${post.id}`)} // Use navigate to go to the blog post
                className="mt-4 text-[#e63946] hover:text-[#e63946]/90 transition-colors"
              >
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;