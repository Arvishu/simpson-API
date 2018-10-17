
import  React  from  'react';
import './App.css';

const  GenerateEmployee = ({ selectEmployee }) => {
    return (
        <div  className="GenerateEmployee">
        <button className="Button" onClick={selectEmployee}>New Quote</button>
        </div>
    );
};

export  default  GenerateEmployee;