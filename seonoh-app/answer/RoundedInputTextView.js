import { View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity, Image } from 'react-native';
import React from 'react'

/*
    RoundedInputTextView 
*/

export default class RoundedInputTextView extends React.Component {
    render() {
        return (
            <KeyboardAvoidingView behavior="padding" enabled>
                    <View
                        style={{
                            marginTop: 2,
                            paddingLeft: 14,
                            paddingRight: 14,
                            height: 40,
                            flexDirection: 'row'
                        }}>
                        <TextInput
                            ref="commentInput"
                            style={{
                                height: 40,
                                flex: 1
                            }}
                            placeholder="내용을 입력해주세요."
                            onChangeText={(text) => this.setState({ commentText: text })}
                        >
                        </TextInput>

                        <TouchableOpacity
                            onPress={() =>
                                this.addCommentRequest(
                                    this.props.navigation.getParam('questionAnswerIdNum'),
                                    this.state.dataSource[this.state.dataSource.length - 1].commentId,
                                    this.state.commentText,
                                    "")
                            }>
                            <Image
                                source={require('../res/question_detail/btn_cancel_bl.png')}
                                style={{
                                    width: 30,
                                    height: 30
                                }}></Image>
                        </TouchableOpacity>
                    </View>
                
                </KeyboardAvoidingView>
        )
    }

}