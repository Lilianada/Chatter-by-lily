import React from 'react';
import './style.scss';

export default function FeaturedPosts() {
    const posts = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

  return (
    <section className='featured__component'>
      <div className="featured__content">
        <div className="popular__post">

        </div>
        <div className="featured__posts">
            {
                posts.map((post, index) => {
                    return(
                    <div className="post" key={index}>
                        <p>{post}</p>
                    </div>)
                })
            }
        </div>
      </div>
    </section>
  )
}
