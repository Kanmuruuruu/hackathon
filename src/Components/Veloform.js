import React, { useState, useEffect } from 'react';
import './Veloform.css';

const  Veloform = props => {
     const[value, setValue] = useState("");

     const handleChange = event => {
        setValue(event.target.value)
     };
     const handleSubmit = (event) => {
         event.preventDefault();
         props.getName(value.toLowerCase());
     };
     return (
        <div>
            <h1 className='titre'> Velo + </h1>
            <div className="card-card-a">
                <div className="">
                    <form onSubmit={handleSubmit}>
                        <input type='text' placeholder='Name or ID' name='name'/>
                        <input type='password' placeholder='Password' name='name'/>
                        <button> Confirm </button>
                    </form>
                    <p>Velo +</p>
                </div>

                <div className="card-title">
                    <h3>Lorem Ipsum</h3>
                </div>
                <div className="card-excerpt">
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam voluptatibus autem consectetur
                        voluptate facere at, omnis ab optio placeat officiis! Animi modi harum enim quia veniam
                        consectetur unde autem inventore.</p>
                </div>
            </div>

            <div className="card-card-b">
                <div className="">
                    <p> mobilité responsable </p>
                </div>
                <div className="card-title">
                    <h3>Lorem Ipsum</h3>
                </div>
                <div className="card-excerpt">
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam voluptatibus autem consectetur
                        voluptate facere at, omnis ab optio placeat officiis! Animi modi harum enim quia veniam
                        consectetur unde autem inventore.</p>
                </div>
            </div>

            <div className="card-card-c">
                <div className="">
                    <p> se connecter </p>
                </div>
                <div className="card-title">
                    <h3> Lorem Ipsum </h3>
                </div>
                <div className="card-excerpt">
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam voluptatibus autem consectetur
                        voluptate facere at, omnis ab optio placeat officiis! Animi modi harum enim quia veniam
                        consectetur unde autem inventore.</p>
                </div>
            </div>



        </div>
    );
};

const Velo = () => {
    const [parks, setParks] = useState([]);

    const getParks = async () => {
        const response = await fetch ("https://data.orleans-metropole.fr/api/records/1.0/search/?dataset=parcs-relais-velos-securises-tao-2018-orleans-metropole&rows=21%22");
        const data = await response.json();
        const result = data.records;
        console.log(result);
        setParks(result);
    };

    useEffect(()=>{
        getParks();
    }, []);

    return (
        <div>
            {
                parks ?
                    parks.map( (park,index)=> {
                        return (
                            <div key={index}>
                                <p>{park.fields.latwgs84}</p>
                                <p>{park.fields.longwgs84}</p>
                            </div>
                        );
                    })
                    :
                    null
            }
        </div>
    )
};


export default Veloform;






