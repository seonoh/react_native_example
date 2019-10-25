import { Image } from 'react-native'
import React,{ Component } from 'react'

class CircleImageView extends Component{
    render(){
        const { image } = this.props;
        const { circleWidth } = this.props
        const { circleHeight } = this.props

        return(
            <Image
                source = {{ uri: image}}
                style = {{
                    width : circleWidth, 
                    height : circleHeight, 
                    borderRadius : 30/1
                }}
            />
        );
    }
}
export default CircleImageView