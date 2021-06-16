import React from 'react';

const Planets = (props) =>{
    const {name, climate, gravity, terrain, population } = props.planets;
    return(
        <div className="card">
            <div className= "card-body">
                <h1>{name}</h1>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Climate: {climate}</li>
                    <l1 className="list-group-item">Gravity: {gravity}</l1>
                    <li className="list-group-item">Terrain: {terrain}</li>
                    <li className="list-group-item">Population: {population}</li>
                </ul>
            </div>

        </div>
    )
}

export default Planets;