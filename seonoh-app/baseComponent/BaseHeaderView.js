import { View } from 'react-native';
import React from 'react'
import { getStatusBarHeight } from 'react-native-status-bar-height'

/*
    HeaderView 
*/

export default class BaseHeaderView extends React.Component {
    render() {
        const {backColor} = this.props
        return (
            <View style={
                {
                    opacity : 0.5,
                    flex : 1,
                    paddingLeft: 14,
                    paddingRight: 14,
                    flexDirection: 'row',
                    height: 50,
                    marginTop : getStatusBarHeight(),
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