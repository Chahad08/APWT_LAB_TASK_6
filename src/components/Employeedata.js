import React from 'react';
import { Link } from 'react-router-dom';

const Employeedata = (props) => {
    const {Eid,Ename,id,dept}=props.employee
    return (
       
        
        <Link to ={"/Employeelist/"+id} className="Employeelist">
            
            <p>{Ename}</p>
            <p>{Eid}</p>
            <p>{dept}</p>
        </Link>
    );
};

export default Employeedata;



