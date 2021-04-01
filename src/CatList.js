// write your CatList component here
import React, { Component } from 'react';

class CatList extends Component {
    
    render() {
        const {catPics} = this.props;
        
        return (
        <div>
            {catPics.map(pic => 
                <img key={pic.id} src={pic.url} />)
            }
        </div>
    );
  }
}

export default CatList