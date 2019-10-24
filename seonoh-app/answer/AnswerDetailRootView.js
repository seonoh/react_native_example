import React, { Component } from 'react';
import { View, TextInput, Image, FlatList, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import AnswerItemView from './AnswerItemView';
import AnswerDetailHeaderView from './AnswerDetailHeaderView';
import netRequest from '../netRequest'
import AnswerItem from '../model/AnswerItem'
import CommentItem from '../model/CommentItem'
import CommentView from '../comments/CommentView';
import commentStyles from '../comments/commentViewStyles'
import RoundedInputTextView from './RoundedInputTextView'


export default class AnswerDetailRootView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            imageLength: 0,
            commentText: '',
            questionTitle: '',
            refreshing: false
        };

        this.answerDetailFlatList = React.createRef()
        this.commentInput = React.createRef()
    }

    componentDidMount() {
        const questionAnswerIdNum = this.props.navigation.getParam('questionAnswerIdNum')
        this.loadData(questionAnswerIdNum, 0)
    }

    onRefresh(qaid) {
        this.setState({
            refreshing: true
        }, function () {
            this.loadData(qaid, 0)
        })
    }

    async loadData(qaid, lastCommentId) {

        let result = null

        try {
            result = await netRequest.getAnswerDetailList(qaid, lastCommentId)
        } catch (err) {
            console.log(`loaddata',"error code -> ${err}`)
        }

        const data = this.refineData(result)
        const answerItem = new AnswerItem(result['answer'])

        this.setState({
            dataSource: this.refineData(result),
            imageLength: answerItem.images.length,
            questionTitle: data[0].questionTitle,
            refreshing: false
        })
    }

    refineData(data) {
        let dataList = [];
        dataList.push(new AnswerItem(data['answer']))
        dataList[0].likeCount = data['like-count']
        dataList[0].answerCommentCount = data['comment-count']
        let commentsLength = data['comments'].length
        for (let i = 0; i < commentsLength; i++) {
            dataList.push(new CommentItem(data['comments'][i]))
        }
        return dataList
    }

    async addCommentRequest(qaid, lastCommentId, text, summonUsers) {
        this.setState({
            refreshing: true
        })

        let result = null

        try {
            result = await netRequest.postComment(qaid, lastCommentId, text, summonUsers)
        } catch (err) {
            console.log(`loaddata',"error code -> ${err}`)
        }

        const commentItem = new CommentItem(result['comments'][result['comments'].length - 1])
        const data = this.state.dataSource.concat(commentItem)

        this.setState({
            dataSource: data
        }, function () {
            setTimeout(() => {
                this.refs.answerDetailFlatList.scrollToEnd()
                this.refs.commentInput.clear()
                this.setState({
                    refreshing: false
                })
            }, 500)
        })
    }

    renderAnswerDetail(item, index) {
        if (index == 0) {
            return (
                <View style={{ backgroundColor: 'white' }}>
                    <AnswerItemView
                        answerItem={item}
                        length={item.images.length}
                        isDetail={true}
                    />
                </View>
            )

        } else {

            return (

                <View style={(index == 1 ? commentStyles.firstContainer : commentStyles.otherContainer)}>
                    <CommentView
                        image={item.profileImage}
                        nickName={item.nickName}
                        content={item.content}
                        writtenDateTime={item.writtenDateTime} >
                    </CommentView>
                </View>

            )
        }
    }

    render() {

        return (

            <View style={{
                flex: 1,
                flexDirection: 'column'
            }}>
                <AnswerDetailHeaderView
                    title={this.state.questionTitle} />

                <FlatList
                    ref="answerDetailFlatList"
                    style={{
                        backgroundColor: '#f3f3f3',
                        flexDirection: 'column',
                        flex: 1,
                        marginBottom: 4,
                        paddingTop: 2,
                        paddingBottom: 2,
                    }}
                    data={this.state.dataSource}
                    refreshing={this.state.refreshing}
                    onRefresh={() => this.onRefresh(this.props.navigation.getParam('questionAnswerIdNum'))}
                    renderItem={({ item, index }) => this.renderAnswerDetail(item, index)}
                    keyExtractor={(item, index) => item + index.toString()} />

                <KeyboardAvoidingView behavior="padding" enabled>
                    <View
                        style={{
                            borderColor : '#f7f7f8',
                            borderTopWidth : 2,
                            height : 44,
                            paddingLeft: 14,
                            paddingRight: 14,
                            flexDirection: 'row'
                        }}>
                        <TextInput
                            ref="commentInput"
                            style={{
                                alignSelf : 'center',
                                backgroundColor : '#f7f7f8',
                                borderRadius : 20,
                                paddingLeft : 8,
                                height: 30,
                                flex: 1,
                                fontSize : 13,
                                color : "#adadad"
                            }}
                            enabled
                            multiline
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
                            }
                            style ={{
                                justifyContent : 'center',
                                marginLeft : 8
                            }}>
                            <Image
                                source={require('../res/answer_detail/btn_icon_send.png')}
                                style={{
                                    width: 30,
                                    height: 30
                                }}></Image>
                        </TouchableOpacity>
                    </View>
                
                </KeyboardAvoidingView>

            </View>

        )
    }
}