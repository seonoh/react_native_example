import { Text, FlatList, Image, View, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../styles'
import UserProfileView from '../UserProfileView'
import LevelView from '../LevelView';
import UserTypeView from '../UserTypeView';
import UserTitleView from '../UserTitleView';
import AnswerDetailImageListView from './AnswerDetailImageListView'
import answerStyles from './answerViewStyles'


class AnswerItemView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            dataSource: [],
            imageLength : 0,
            isDetail : false,
            style : answerStyles.baseContainer
        };
        
        // this.renderImageList = this.renderImageList.bind(this)
        
    }

    componentDidMount() {
        let containerStyle = ''
        
        if(this.props.isDetail){
            containerStyle = answerStyles.detailContainer
        }else{
            containerStyle = answerStyles.baseContainer
        }


        this.setState({
            dataSource: this.props.answerItem,
            imageLength : this.props.length,
            isDetail : this.props.isDetail,
            style : containerStyle
        })
        
    }

    calculateHeight= (length) =>{
        let imageListHeight = 0
        if(length > 0){
            if(length <= 3){
                imageListHeight = 90
            }else if(length>3 && length <=6){
                imageListHeight = 180
            }else{
                imageListHeight = 270
            }
        }else{
            imageListHeight = 0
        }
        return imageListHeight
    }

    render() {
        const { answerItem } = this.props
        const { that } = this.props


        return (

            <View
            style={ this.state.style }>
                <TouchableOpacity
                    onPress={() => that.props.navigation.navigate('AnswerDetail'
                    , {
                        questionAnswerIdNum : answerItem.questionAnswerIdNum
                    }
                    )}>
                    <View>

                        <View style={{
                            flexDirection: 'row',
                            marginTop: 14,
                            height: 40
                        }}>
                            <UserProfileView
                                image={answerItem.profileImage} />
                            <View style={{
                                flex: 1,
                                flexDirection: 'column',
                                alignSelf: 'center'
                            }}>
                                <Text style={styles.questionNickName}>
                                    {answerItem.nickName}
                                </Text>

                                <View style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    marginTop: 6
                                }}>
                                    <LevelView
                                        level={answerItem.level}>
                                    </LevelView>

                                    <UserTypeView
                                        position={answerItem.position}>
                                    </UserTypeView>

                                    <UserTitleView
                                        title={answerItem.userTitle}
                                        color={answerItem.userTitleColor}>

                                    </UserTitleView>
                                </View>

                            </View>

                        </View>

                        <View style={{
                            marginTop: 10,
                            flex: 1,
                            flexDirection: 'column'
                        }}>
                            <Text>
                                {answerItem.content}
                            </Text>

                            { 
                                this.state.isDetail == true 
                            ? 
                            <View style ={{
                                    height : this.calculateHeight(this.state.imageLength),
                                    paddingTop : 2,
                                    paddingBottom : 2
                            }}>
                                
                                <AnswerDetailImageListView
                                    imageList = {answerItem.images}/>
                            </View>
                            :
                            this.state.imageLength != 0 ? <View style={{ 
                                    width: 400, 
                                    height: 85,
                                    paddingTop : 2,
                                    paddingBottom : 2
                                }}>
                                <FlatList
                                    horizontal={true}
                                    style={{
                                        flex : 1,
                                        flexDirection : 'row',
                                        marginTop: 6,
                                        marginBottom: 4,
                                        paddingTop : 2,
                                        paddingBottom : 2
                                    }}
                                    data={answerItem.images}
                                    renderItem={({ item, index }) =>
                                        this.renderImageList(item, index)
                                    }
                                    keyExtractor={(index) => index.toString()}
                                /></View> : <View style ={{marginBottom : 8}}></View>
                            }

                            <View style={{
                                flex : 1,
                                flexDirection: 'row',
                                marginTop : 4,
                                marginBottom : 8}}>
                                <Image
                                    style={{
                                        width: 20,
                                        height: 20
                                    }}
                                    source={require('../res/question_detail/btn_icon_heart_off.png')} />

                                <Text style={{
                                    width: 30,
                                    height: 20,
                                    marginLeft: 6
                                }}>
                                    {answerItem.likeCount}
                                </Text>

                                <Image
                                    style={{
                                        width: 20,
                                        height: 20,
                                        marginLeft: 10
                                    }}
                                    source={require('../res/question_detail/btn_icon_reply.png')} />

                                <Text style={{
                                    width: 30,
                                    height: 20,
                                    marginLeft: 6,
                                }}>
                                    {answerItem.answerCommentCount}
                                </Text>

                                <Text style={{
                                    flex : 1,
                                    width : 50,
                                    height : 20,
                                    textAlign: 'right',
                                    fontSize : 14,
                                    color : '#DADADA',
                                    textAlignVertical : 'center'
                                }}>
                                    
                                    {answerItem.writtenDateTime}
                                </Text>
                            </View>
                        </View>
                    </View>

                </TouchableOpacity>
            </View>


        )

    }

    renderImageList = (item, index) => {

        if (index < 3) {
            // console.log('index < 3 : ', item)
            return (
                index == 0 ?
                <Image style={{
                    width: 70,
                    height: 70,
                    alignSelf: 'baseline'}}
                    source={{ uri: item }} /> : <Image style={{
                        marginLeft: 4,                        
                        width: 70,
                        height: 70,
                        alignSelf: 'baseline'
                    }}
                        source={{ uri: item }} />
            );
        }
        else if (index == 3) {
            return (
            <View style={{
                marginLeft: 4,
                width: 70,
                height: 67,
                borderWidth: 1,
                borderColor: 'black',
                justifyContent: 'center'
            }}>
                <Text style={{
                    alignSelf: 'center'
                }}>
                    +{this.state.imageLength-3}
                </Text>

            </View>);
        }
        else {
            // console.log('index else ', item)

            return (<Image />);
        }
    };
}

export default AnswerItemView