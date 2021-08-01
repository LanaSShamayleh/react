import React from 'react';
import HornedBeast from './HornedBeast';


class Main extends React.Component{
    render(){
        return(
            <div className='new'>
              
              <HornedBeast title={'Eric Lofgren'} imageUrl={'http://www.misfit-studios.com/img/Eric-Lofgren-Horned-Beast-online.jpg'}  />
             
         
           
              <HornedBeast title={'Mythical creatures'}  imageUrl={'https://i.pinimg.com/originals/29/8f/f5/298ff54cc47418f2a7dcd9fcb1258729.jpg'} />
             
          
           </div> 
        )
    }
}
export default Main;