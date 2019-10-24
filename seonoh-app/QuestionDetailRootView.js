import React from 'react';
import { View, FlatList, Text, Image, Button } from 'react-native';
import styles from './styles'
import netRequest from './netRequest'
import UserProfileView from './UserProfileView';
import LevelView from './LevelView';
import UserTypeView from './UserTypeView';
import UserTitleView from './UserTitleView';
import QuestionItem from './QuestionItem'
import { classifyCategoryType } from './utils'
import AnswerItem from './model/AnswerItem';
import AnswerItemView from './answer/AnswerItemView';

let answerLength = 0
let length = 0
let thisVal = ''
let questionTitle = ''

class QuestionDetailRootView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: []
        };
        this.renderImageList = this.renderImageList.bind(this);
    }
    renderImageList = (item, index) => {
        if (length <= index) {
            length = (index + 1);
        }
        if (index < 3) {
            return (<Image style={{
                marginLeft: 4,
                width: 70,
                height: 70,
                backgroundColor: 'red',
                alignSelf: 'baseline'
            }} source={{ uri: `${item}` }}></Image>);
        }
        else if (index == 3) {
            return (<View style={{
                marginLeft: 4,
                width: 70,
                height: 70,
                borderWidth: 1,
                borderColor: 'black',
                justifyContent: 'center'
            }}>
                <Text style={{
                    alignSelf: 'center'
                }}>
                    +{(length - 3)}
                </Text>

            </View>);
        }
        else {
            return (<Image />);
        }
    };

    renderQuestionAnswerItem({ item }) {

        let answerHeaderTitle = ''

        if (answerLength == 0) {
            answerHeaderTitle = '답변이 달리지 않았습니다.'
        } else {
            answerHeaderTitle = '답변'
        }

        //질문인 경우
        if (item.answerIdNum == undefined) {
            questionTitle = item.title
            return (
                <View style={
                    {
                        backgroundColor: 'white'
                    }
                }>
                    <View style={[styles.questionContent]}>
                        <Text>
                            {item.writtenDateTime}
                        </Text>

                        <Text style={{
                            flex: 1,
                            textAlign: 'center'
                        }}>
                            {item.si} {item.gu} {item.dong}
                        </Text>

                        <Text>
                            {classifyCategoryType(item.directory)}
                        </Text>
                    </View>
                    <View style={{
                        marginStart: 14,
                        marginEnd: 14,
                        flex: 1,
                        flexDirection: 'column'
                    }}>
                        <Text style={{
                            marginTop: 6,
                            fontSize: 20
                        }}>
                            {item.title}
                        </Text>
                        <Text style={{ marginTop: 6 }}>
                            {item.content}
                        </Text>

                        <Image
                            source={{ uri: item.images[0] }}
                            style={{
                                width: 100,
                                height: 100,
                                marginTop: 6
                            }}
                        />
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'flex-end'
                        }}>
                            <Image
                                style={{
                                    width: 10,
                                    height: 10,
                                    marginRight: 4,
                                    alignSelf: 'center'
                                }}
                                source={require('./res/question_detail/icon_view.png')}
                            >

                            </Image>
                            <Text style={[styles.rigihtText]}>
                                {item.viewCount}
                            </Text>
                        </View>

                        <View style={{
                            flex: 1,
                            flexDirection: 'row'
                        }}>
                            <UserProfileView
                                image={item.profileImage}
                            />

                            <View style={{
                                flex: 1,
                                flexDirection: 'column',
                                marginBottom: 14
                            }}>
                                <Text style={styles.questionNickName}>
                                    {item.nickName}
                                </Text>

                                <View style={{
                                    flex: 1,
                                    marginTop: 6,
                                    flexDirection: 'row'
                                }}>
                                    <LevelView
                                        level={item.level} />

                                    <UserTypeView
                                        position={item.position}
                                    />

                                    <UserTitleView
                                        title={item.userTitle}
                                        color={item.userTitleColor}
                                    />

                                </View>
                            </View>

                        </View>


                    </View>

                    <View style={{
                        paddingTop: 14,
                        paddingBottom: 6,
                        backgroundColor: '#f3f3f3'
                    }}>
                        <Text style={{
                            marginLeft: 14,
                            fontSize: 20
                        }}>
                            {answerHeaderTitle}
                        </Text>
                    </View>

                </View>
            )
            //답변인 경우
        } else {
            return (
                <AnswerItemView
                    questionTitle={questionTitle}
                    answerItem={item}
                    that={thisVal}
                    answerLenth = {answerLength}
                    length = {item.images.length}>
                </AnswerItemView>
            )
        }

    }

    componentDidMount() {
        this.loadData()
    }

    async loadData() {
        let result = null

        try {
            //답변 3개
            result = await netRequest.getQuestionDetailList(2900, 0)

            //답변 2개
            // result = await netRequest.getQuestionDetailList(2882, 0)

            //답변 없음
            // result = await netRequest.getQuestionDetailList(2500, 0)

        } catch (err) {
            console.log(`loaddata',"error code -> ${err}`)
        }

        this.setState({
            dataSource: this.refineData(result)
        })
    }

    refineData(data) {
        let dataList = [];
        data['question']['id'] = 0
        dataList.push(new QuestionItem(data['question']))
        answerLength = data['answer-list'].length
        for (let i = 0; i < answerLength; i++) {
            dataList.push(new AnswerItem(data['answer-list'][i]))
        }
        return dataList
    }

    render() {
        thisVal = this
        return (
            <View
                style={styles.container}>

                <FlatList
                    style={{ flex: 1 }}
                    data={this.state.dataSource}
                    renderItem={this.renderQuestionAnswerItem}
                    keyExtractor = {(item,index)=>index.toString()}/>


            </View>
        );
    }
}

export default QuestionDetailRootView