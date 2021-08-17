import React from 'react';

const List = ({people, deletePerson}) => {
  return (
    <>
      {people.map(person => {
        const { id, name, age, image } = person;
        return(
          <div className='list-items-container'>
          <article key={id} className='person'>
            <img src={image} alt={name}/>
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
          <div onClick={() => deletePerson(id)} className='delete-btn'>delete</div>
          </div>
        )
      })}
    </>
  );
};

export default List;
