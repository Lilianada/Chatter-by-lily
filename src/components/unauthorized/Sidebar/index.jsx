import React from 'react';
import './style.scss';

export default function Sidebar() {
  return (
    <aside className='sidebar__component'>
      <div className="side__piece">
        <div className="side__piece_author">
          our lovely authors
        </div>
        <div className="side__piece_recents">
          our lovely posts
        </div>
        <div className="side__piece_categories">
          our lovely categories
        </div>
        <div className="side__piece_search">
          <div className="search__box">
            <input type="text" placeholder='search' />
            
          </div>
        </div>

      </div>
    </aside>
  )
}
