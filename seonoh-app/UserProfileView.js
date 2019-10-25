import React,{ Component } from 'react'
import CircleImageView from './CircleImageView';

class UserProfileView extends Component{
    render(){
        const { image } = this.props;
        const { circleWidth } = this.props
        const { circleHeight } = this.props

        return(
            <CircleImageView 
                image = {image}
                circleWidth = {circleWidth}
                circleHeight = {circleHeight}/>
        );
    }
}
export default UserProfileView