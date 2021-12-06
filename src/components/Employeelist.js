import React, { useState } from 'react';
import Values from './Values';
import Employeedata from './Employeedata';

const Employeelist = () => {
    const data= Values
    const [Edata]=useState(data)
    return (
        <div>
            {
                Edata.map(key => <Employeedata employee={key}>  </Employeedata>)
            }
            
        </div>
    );
};

export default Employeelist;