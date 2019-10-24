import { View,Text } from 'react-native';
import React from 'react'
import UserProfileView from '../UserProfileView';

/*
    CommentView 
*/

export default class CommentView extends React.Component {
    render() {
        const {image} = this.props
        const {nickName} = this.props
        const {content} = this.props
        const {writtenDateTime} = this.props
        return (
            <View style={
                {
                    paddingLeft: 14,
                    paddingRight: 14,
                    paddingTop : 10,
                    paddingBottom : 10,
                    flexDirection: 'row'
                }
            }>
                <View>
                    <UserProfileView
                        image = {image}
                    />
                </View>
                
                <View style={{
                    flex : 1,
                    marginLeft : 10,
                    flexDirection : 'column'
                }}>
                    <Text>
                        {nickName}
                    </Text>
                    <Text style ={{
                        marginTop : 4
                    }
                    }>
                        {content}
                    </Text>
                </View>

                <Text style ={{
                    fontSize : 10,
                    color : '#b2b2b2'
                }}>
                    {writtenDateTime}
                </Text>
                
            </View>
        )
    }

}