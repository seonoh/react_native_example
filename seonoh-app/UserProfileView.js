import React,{ Component } from 'react'
import CircleImageView from './CircleImageView';

class UserProfileView extends Component{
    render(){
        const { image } = this.props;
        return(
            <CircleImageView image = {image}/>
        );
    }
}
export default UserProfileView