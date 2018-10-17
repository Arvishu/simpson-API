import  React  from  'react';






const  DisplayEmployee = ({ employee }) => {
    return (
        <div  >
            <img className="sizePicture" src={employee.image}  alt="picture" />
            <ul className="DisplayEmployee">
                <li> {employee.character}</li>
                <li>{employee.quote}</li>
                     
    
                
            </ul>
        </div>
    );
};

export  default  DisplayEmployee;