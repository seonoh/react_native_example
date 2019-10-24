import { Text } from 'react-native'
import React,{ Component } from 'react'

class LevelView extends Component{
    render(){
        const { level } = this.props
        return(
            <Text style = {{
                width : 40,
                height : 18,
                fontSize : 10 ,
                alignSelf : 'baseline',
                textAlign : 'center',
                textAlignVertical : 'center',
                backgroundColor : 'white',
                borderWidth : 0.5,
                borderRadius : 20,
                marginLeft : 6
            }}>
                Lv.{level}
            </Text>
        );
    }
}

export default LevelView