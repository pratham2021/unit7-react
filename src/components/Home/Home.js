import React, { useState } from 'react';
import Class from "../Class/Class";
import "../Home/Home";
import ClassGraphQL from '../Class/ClassGraphQL';

function Home(props) {

    const [value, setValue] = useState('');
    const [favoriteClasses, setClasses] = useState([]);

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault(); // prevent the form from submitting
        if (!favoriteClasses.includes(value)) {
            setClasses(favoriteClasses.concat(value));
            setValue('');
        }
        console.log(favoriteClasses);
    }

    return (
      <div>
        <h1>Hello World!</h1>
        <form onSubmit={handleSubmit}>
            <label>Add Favorite Class</label>
            <input type="text" value={value} onChange={handleChange}></input>
            <button type="submit" onChange={handleSubmit}>Add Class!</button>
        </form>
        <div className="class-list">
            {favoriteClasses.map((favClass) =>
                <Class name={favClass} key={favClass}></Class>
            )}
        </div>
        <div className="my-classes">
            {favoriteClasses.map((favClass) =>
                <ClassGraphQL name={favClass} key={favClass}></ClassGraphQL>
            )}
        </div>
      </div>
    )
}

export default Home;