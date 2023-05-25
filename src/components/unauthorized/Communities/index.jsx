import React, {useState, useEffect} from 'react';
import './style.scss';
import axios from 'axios';

export default function Communities() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      const fetchUsers = async () => {
        try {
          const response = await axios.get('https://randomuser.me/api/?results=10');
          const { results } = response.data;
          setUsers(results);
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchUsers();
    }, []);
  return (
    <section className="communities__component">
        <div className="communities__container">
            <div className="communities__title">
                <h2 className='title'>Join our Community of writers</h2>
                <p className='subtitle'>Join a community of passionate writers.</p>
            </div>
            <div className="communities__users">
                {users.map((user, index) => (
                    <div key={index} className='user'>
                        <img src={user.picture.large} alt="User" />
                        <p className='user__name'>{`${user.name.first} ${user.name.last}`}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}
