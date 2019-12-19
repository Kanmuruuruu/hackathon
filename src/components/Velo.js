import React, {useState, useEffect} from 'react';

const Velo = () => {
    const [parks, setParks] = useState([]);

    const getParks = async () => {
        const response = await fetch ("https://data.orleans-metropole.fr/api/records/1.0/search/?dataset=parcs-relais-velos-securises-tao-2018-orleans-metropole&rows=21");
        const data = await response.json();
        const result = data.records;
        console.log(result);
        setParks(result);
    }

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
    );
}

export default Velo;