import { View,Text } from 'react-native'
import React,{ Component } from 'react'

class UserTitleView extends Component{
    render(){
        const { title } = this.props
        const { color } = this.props
        
        return(
            title != ''?
            <Text style = {{
                color : 'white',
                paddingStart : 8,
                paddingEnd : 8,
                height : 18,
                fontSize : 10 ,
                alignSelf : 'baseline',
                textAlign : 'center',
                textAlignVertical : 'center',
                backgroundColor : color,
                borderRadius : 20,
                marginLeft : 6
            }}>
                {title}
            </Text> : <View></View>
        );
    }
}

export default UserTitleView