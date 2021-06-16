import React, {useState, useEffect }  from 'react';
import Error from '../components/Error';
import People from '../components/People';
import Planets from '../components/Planets';
import axios from 'axios';

const Display = (props) => {
    const {category, id} = props; 
    const [error, setError] = useState(false);
    const [data, setData] = useState({})
    

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${category}/${id}`)
            .then(response => {
                setData(response.data);
                setError(false);
            })
            .catch(err => setError(true));
    }, [category, id])

    return (
        <div>
                {
                    error ?
                    <Error></Error> :
                    category == "people" ?
                    <People person= {data}/> : <Planets planets = {data}/>
                }
        </div>
    )
}

export default Display;