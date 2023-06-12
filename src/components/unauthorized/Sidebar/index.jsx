import React, {useState, useEffect} from 'react';
import './style.scss';
import { Categories } from '../../../mockData';
import axios from 'axios';


export default function Sidebar() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://randomuser.me/api/?results=8"
        );
        const { results } = response.data;
        setUsers(results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, []);
  return (
    <aside className='sidebar__component'>
      <div className="side__piece">
        <div className="side__piece_author">
          <h3 className="author__header">
            Popular Authors
          </h3>
          <div className="authors__list">
            {
              users.map((user, idx) => {
                return (
                  <div className="author" key={idx}>
                    <img src={user.picture.thumbnail} alt="User" className="author__img" />
                    <div className="author__dets">
                    <p className="author__name">{`${user.name.first} ${user.name.last}`}</p>
                    <p className="author__about">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="side__piece_recents">
          our lovely posts
        </div>
        <div className="side__piece_categories">
            <h3 className="categories__header">
              Recommended categories
            </h3>
          <div className="categories__list">
            {
              Categories.map((item, idx) =>{
                return (
                  <p className="category" key={idx}>{item}</p>
                )
              })
            }
          </div>
          <button className="see__more">See more categories</button>
        </div>
        <div className="side__piece_cta">
          <div className="cta__container">
            <h3 className="cta__header">
              Become PRO now
            </h3>
            <p className="cta__text">
              ...and enjoy all the great benefits
            </p>
            <button className="cta__button">
              Get started
            </button>
          </div>
        </div>
        {/* <div className="side__piece_search">
          <div className="search__box">
            <input type="text" placeholder='search' />
          </div>
        </div> */}

      </div>
    </aside>
  )
}
