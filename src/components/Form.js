import React from 'react';

const Form = (props) => {
    const { selectedOption, onChangeHandler, onSubmitHandler} = props; 
    return (
        <div>
            <form onSubmit={ onSubmitHandler }>
                <div className = "row">
                    <div className= "col-sm">
                        <label>Search for:</label>
                    </div>
                    <div className = "col-sm-4">
                        <select className="form-control" name= "category" onChange={ onChangeHandler } value= { selectedOption.category }>
                            <option value="people">People</option>
                            <option value="planets">Planets</option>
                        </select>
                    </div>
                    <div className = "col-sm-2">
                        <label> id: </label>
                    </div>
                    <div className= "col-sm-2">
                        <input className="form-control" name= "id" type = "number" onChange={ onChangeHandler } value= { selectedOption.id }></input>
                    </div>
                    <div className= "col-sm-2">
                    <input type ="submit" value="Search"></input>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form; 