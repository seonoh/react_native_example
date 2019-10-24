import { View } from 'react-native';
import React from 'react'

/*
    HeaderView 
*/

export default class BaseHeaderView extends React.Component {
    render() {
        const {backColor} = this.props
        return (
            <View style={
                {
                    paddingLeft: 14,
                    paddingRight: 14,
                    flexDirection: 'row',
                    height: 50,
                    marginTop : 40,
                    alignItems: 'center',
                    alignContent: 'center',
                    backgroundColor : backColor
                }
            }>
                {this.props.children}
            </View>
        )
    }

}