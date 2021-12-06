import React from 'react';
import { useParams } from 'react-router';
import Values from './Values';

const Employeedetails = () => {
    const data = Values
    const {id} = useParams();
    return (
        <div style={{textAlign:"Left"}}>
        
        <p><h1>{data[id-1].Ename}</h1></p>
        
        <p><b>{data[id-1].Eid}</b></p>
        
        <p><b>{data[id-1].Dept}</b></p>
        
    </div>
    
    );
};

export default Employeedetails;