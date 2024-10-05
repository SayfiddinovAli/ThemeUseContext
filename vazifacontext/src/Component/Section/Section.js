import React, { Component } from 'react';
import './Section.css';
import ThemeContext from '../../Context/ThemeContext';

export default class Section extends Component {
   static contextType=ThemeContext;
  render() {
    const theme=this.context;
    return (
     <div className={`section ${theme}`}>
         <div className='d-flex align-items-center justify-content-center flex-column' style={{ height: '100vh' }}>
        <div className='row d-flex align-items-center justify-content-center flex-column'>
          <div className="col-6"><h1 className='text-primary fw-bold mb-0'>Hello,</h1>
          <h1 className='text-primary fw-bold mb-0'>My name is Ali</h1>
          <hr />
          </div>

          <div className="col-6">
        <p className='lorem-text text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, itaque tempore minus debitis rem unde praesentium corrupti earum reiciendis tenetur voluptas distinctio, quam neque, quae tempora expedita placeat ut iure temporibus blanditiis! Repellendus eveniet voluptatum accusantium illum quod consequatur numquam tenetur eum laudantium veritatis repellat ducimus, consequuntur, impedit dignissimos aliquid explicabo soluta nihil eos non qui officia provident voluptate. Maxime!
          </p>
        </div>

        </div>
             </div>
     </div>
    );
  }
}
