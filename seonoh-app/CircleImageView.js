import { Image } from 'react-native'
import React,{ Component } from 'react'

class CircleImageView extends Component{
    render(){
        const { image } = this.props;
        return(
            <Image
                source = {{ uri: image}}
                style = {{
                    width : 40, 
                    height : 40, 
                    borderRadius : 30/1
                }}
            />
        );
    }
}
export default CircleImageView