import React from 'react';

const People = (props) =>{
    const {name, height, mass, hairColor, birth_year } = props.person;
    return(
        <div className="card">
            <div className= "card-body">
                <h2>{name}</h2>
                <ul className ="list-group list-group-flush">
                    <li className="list-group-item">Height: {height} cm</li>
                    <li className="list-group-item">Mass: {mass} kg</li>
                    <li className="list-group-item">Hair Color: {hairColor}</li>
                    <li className="list-group-item">Birth Year: {birth_year}</li>
                </ul>
            </div>
        </div>
    )
}

export default People;