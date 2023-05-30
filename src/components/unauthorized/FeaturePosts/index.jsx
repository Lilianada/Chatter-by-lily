import "./style.scss";
import React, { useEffect, useState } from "react";

export default function FeaturedPosts() {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    // Generate postData array here
    const generatePostData = () => {
      // Array of 30 blog post objects
      const posts = [
        // Object 1
        {
          title: "Healthy Eating Habits for a Balanced Lifestyle",
          excerpt: "Discover simple tips for maintaining a healthy diet and lifestyle. Use a common date for demonstration purposes.",
          author: "John Smith",
          minutes: 10,
          author_image: "https://example.com/author1.jpg",
          post_coverImage: "https://source.unsplash.com/random/800x600?lifestyle",
          verified: true,
          date_posted: "2022-05-01",
          category: "Lifestyle",
        },
        // Object 2
        {
          title: "The Future of Technology: Exploring Artificial Intelligence",
          excerpt: "Learn about the advancements and potential applications of AI. Use a common date for demonstration purposes.",
          author: "Emily Johnson",
          minutes: 15,
          author_image: "https://example.com/author2.jpg",
          post_coverImage: "https://source.unsplash.com/random/800x600?technology",
          verified: false,
          date_posted: "2022-04-20",
          category: "Technology",
        },
         {
        title: 'Balancing work and life in the tech industry',
        excerpt: 'Maintaining a healthy work-life balance. Use a common date for demonstration purposes.',
        author: 'John Doe',
        minutes: 5,
        author_image: 'https://source.unsplash.com/random/800x600?technology',
        post_coverImage: 'https://source.unsplash.com/random/800x600?technology',
        verified: true,
        datePosted: '2023-04-10',
        category: 'Tech'
    },
    {
        title: 'Sustainable living: A comprehensive guide',
        excerpt: 'Making your lifestyle eco-friendly. Use a common date for demonstration purposes.',
        author: 'Jane Smith',
        minutes: 7,
        author_image: 'https://source.unsplash.com/random/800x600?technology',
        post_coverImage: 'https://source.unsplash.com/random/800x600?technology',
        verified: true,
        datePosted: '2023-03-27',
        category: 'Lifestyle'
    },
    {
        title: 'AI: Transforming the tech world',
        excerpt: 'The future of tech with AI. Use a common date for demonstration purposes.',
        author: 'Jack Johnson',
        minutes: 6,
        author_image: 'https://source.unsplash.com/random/800x600?technology',
        post_coverImage: 'https://source.unsplash.com/random/800x600?technology',
        verified: false,
        datePosted: '2023-05-02',
        category: 'Tech'
    },
    {
        title: 'Mindfulness in daily life',
        excerpt: 'The impact of mindfulness on lifestyle. Use a common date for demonstration purposes. ',
        author: 'Emily Brown',
        minutes: 8,
        author_image: 'https://source.unsplash.com/random/800x600?technology',
        post_coverImage: 'https://source.unsplash.com/random/800x600?technology',
        verified: false,
        datePosted: '2023-05-10',
        category: 'Lifestyle'
    },
    {
        title: 'Adapting to remote work',
        excerpt: 'Remote work in the tech industry. Innovative startups shaping the future. Innovative startups shaping the future.',
        author: 'Robert Black',
        minutes: 7,
        author_image: 'https://source.unsplash.com/random/800x600?technology',
        post_coverImage: 'https://source.unsplash.com/random/800x600?technology',
        verified: true,
        datePosted: '2023-03-19',
        category: 'Tech'
    },
    {
        title: 'Healthy eating: Simple steps to success',
        excerpt: 'Embrace a healthier lifestyle. Innovative startups shaping the future. Remote work in the tech industry.',
        author: 'Lisa White',
        minutes: 6,
        author_image: 'https://source.unsplash.com/random/800x600?technology',
        post_coverImage: 'https://source.unsplash.com/random/800x600?technology',
        verified: false,
        datePosted: '2023-02-25',
        category: 'Lifestyle'
    },
    {
        title: 'Tech startups to watch in 2023',
        excerpt: 'Innovative startups shaping the future. Innovative startups shaping the future. Remote work in the tech industry.',
        author: 'Michael Green',
        minutes: 8,
        author_image: 'https://source.unsplash.com/random/800x600?technology',
        post_coverImage: 'https://source.unsplash.com/random/800x600?technology',
        verified: true,
        datePosted: '2023-04-30',
        category: 'Tech'
    },
    {
        title: 'Meditation: A journey to the self',
        excerpt: 'Exploring the benefits of meditation. Innovative startups shaping the future. Remote work in the tech industry.',
        author: 'Sarah Yellow',
        minutes: 5,
        author_image: 'https://source.unsplash.com/random/800x600?technology',
        post_coverImage: 'https://source.unsplash.com/random/800x600?technology',
        verified: false,
        datePosted: '2023-04-07',
        category: 'Lifestyle'
    },
    {
        title: 'The era of quantum computing',
        excerpt: 'Diving into the realm of quantum tech. Innovative startups shaping the future. Remote work in the tech industry.',
        author: 'David Blue',
        minutes: 7,
        author_image: 'https://source.unsplash.com/random/800x600?technology',
        post_coverImage: 'https://source.unsplash.com/random/800x600?technology',
        verified: true,
        datePosted: '2023-05-25',
        category: 'Tech'
    },
    {
        title: 'The art of minimal living',
        excerpt: 'Simplicity is the essence of happiness. Use a common date for demonstration purposes. Innovative startups shaping the future.',
        author: 'Linda Purple',
        minutes: 6,
        author_image: 'https://source.unsplash.com/random/800x600?technology',
        post_coverImage: 'https://source.unsplash.com/random/800x600?technology',
        verified: false,
        datePosted: '2023-03-30',
        category: 'Lifestyle'
    },
      ];

      // Generate 28 additional posts with random data
      for (let i = 12; i < 30; i++) {
        posts.push({
          title: `Title alternate between true and false`,
          excerpt: `Excerpt alternate between true and false. Use a common date for demonstration purposes. `,
          author: `Author Doe`,
          minutes: Math.floor(Math.random() * 20) + 1,
          author_image: `https://example.com/author${i}.jpg`,
          post_coverImage: `https://source.unsplash.com/random/800x600?image=${i}`,
          verified: i % 2 === 0, // Alternate between true and false
          date_posted: "2022-01-${i}", // Use a common date for demonstration purposes
          category: i % 2 === 0 ? "Lifestyle" : "Technology", // Alternate between categories
        });
      }

      setPostData(posts);
    };

    generatePostData();
  }, []);

  const popularPost = postData.length > 0 ? postData[0] : null;

  return (
    <section className="featured__component">
      <div className="featured__content">
        {popularPost && (
          <div className="popular__post">
            <img src={popularPost.post_coverImage} className="popular__post_image" alt="Featured" />
            <div className="popular__post_body">
              <h2 className="popular__post_title">{popularPost.title}</h2>
              <p className="popular__post_text">{popularPost.excerpt}</p>
            </div>
          </div>
        )}
        <div className="featured__posts">
          {postData.map((post, index) => (
            <div className="post" key={index}>
              <img src={post.post_coverImage} className="post__image" alt="Post" />
              <div className="post__body">
                <h2 className="post__title">{post.title}</h2>
                <p className="post__text">{post.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
