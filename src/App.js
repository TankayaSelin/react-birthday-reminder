import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data);

  const deletePerson = (id) =>{
    const newPersonList = people.filter(person => id !== person.id);
    setPeople(newPersonList);
  }

  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <List people={people} deletePerson={deletePerson}/>
        {people.length > 0 &&
          <button onClick={() => setPeople([])}>clear all</button>}
      </section>
    </main>
  );
}

export default App;
