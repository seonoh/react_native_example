import React, { Component } from 'react'
import { View, Text, FlatList, Image, Dimensions } from 'react-native'
import ContentDetailHeaderView from './ContentDetailHeaderView'
import netRequest from '../netRequest'
import ContentsItem from '../model/ContentsItem'
import ContentsDetailItem from '../model/ContentsDetailItem'
import UserProfileView from '../UserProfileView'
import LevelView from '../LevelView'
import UserTitleView from '../UserTitleView'
import UserTypeView from '../UserTypeView'

export default class ContentDetailRootView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: []
        };
    }

    renderContensDetailItem = (item, index) => {
        // console.log('item',item)
        if (index == 0) {
            return (
                <View>

                   
                <View>
                    <Image
                        style={{
                            alignContent: 'stretch',
                            height: 300
                        }}
                        source={{ uri: item.mainImage }}>

                    </Image>
                    
                    <View
                        style ={{
                            position : 'absolute',
                            top : 150,
                            margin : 14,
                            flex :1,
                            width : Dimensions.get('window').width,
                            alignItems : 'stretch'

                        }}>
                            <View style ={{
                                flexDirection :'row',
                                backgroundColor : 'white',
                                borderRadius : 12,
                                alignSelf : 'flex-start',
                                // alignContent : 'flex-end',
                                // width : 200,
                                padding : 4
                            }}> 
                                <Image
                                    source = {require('../res/question_detail/icon_view.png')}
                                    style ={{
                                        width : 20,
                                        height : 20
                                }}/>
                                <Text
                                    style ={{
                                        marginLeft : 4,
                                        color : 'black',
                                        fontSize : 12,
                                }}>
                                    {item.si} {item.gu} {item.dong}
                                </Text>
                            </View>
                        

                        <Text style ={{
                                color : 'white',
                                fontSize : 20,
                                marginTop : 10
                            }}>
                            {item.title}
                        </Text>

                        <Text style ={{
                                color : 'white',
                                fontSize : 10,
                                marginTop : 10
                            }}>
                            {item.writtenDateTime}
                        </Text>

                        <View style = {{
                            flex : 1,
                            flexDirection : 'row',
                            alignSelf : 'flex-end'
                            
                        }}>
                                <Image
                                source = {require('../res/question_detail/icon_view.png')}
                                style ={{
                                    width : 20,
                                    height : 20,
                                    marginLeft : 8
                                }}/>
                                <Text style ={{
                                    marginLeft : 4
                                }}>
                                    {item.likeCount}
                                </Text>
                                <Image
                                source = {require('../res/question_detail/icon_view.png')}
                                style ={{
                                    width : 20,
                                    height : 20,
                                    marginLeft : 8
                                }}/>
                                <Text  style ={{
                                    marginLeft : 4
                                }}>
                                    {item.commentCount}
                                </Text>
                                <Image
                                source = {require('../res/question_detail/icon_view.png')}
                                style ={{
                                    width : 20,
                                    height : 20,
                                    marginLeft : 8
                                }}/>
                                <Text  style ={{
                                    marginLeft : 4
                                }}>
                                    {item.viewCount}
                                </Text>
                        </View>
                    </View>

                </View>


                    <View style ={{
                        flex : 1,
                        flexDirection : 'row',
                        paddingLeft : 14,
                        paddingRight : 14,
                        paddingTop : 10,
                        paddingBottom : 10,
                        height : 70
                    }}>


                    <UserProfileView
                            image = {item.profileImage}
                            circleWidth = {50}
                            circleHeight = {50} />
                        <View>

                    <Text style ={{
                        marginLeft : 14,
                        marginBottom : 10
                    }}>
                        {item.nickName}
                    </Text>

                    <View style ={{
                        flex : 1,
                        flexDirection : 'row',

                    }}>
                        <LevelView
                            level={item.level} />

                        <UserTypeView
                            position={item.position} />

                        <UserTitleView
                            title={item.userTitle}
                            color={item.userTitleColor} />

                    </View>
                        </View>

                </View>
                    
                    <View style ={{
                        backgroundColor: '#b2b2b2',
                        height : 1
                    }}/>

                    
                    
            </View>
                
            )
        }else{
            console.log('detail item : ',item)

            if(item.type == 0){
                return(
                    <View style ={{
                        margin : 10
                    }}>
                        <Text>
                            {item.content}
                        </Text>
                    </View>
                )
                
            }else if(item.type == 1){
                return(
                    <View style ={{
                        margin : 10
                    }}>
                        <Image
                            source ={{uri : item.content}}
                            style ={{
                                alignContent : 'stretch',
                                height : (Dimensions.get('window').width * item.ratio)
                            }}
                            />
                    </View>

                )
            }
        }
    }

    render() {
        return (
            <View>

                <View>

                    <FlatList
                        data={this.state.dataSource}
                        renderItem={({ item, index }) => this.renderContensDetailItem(item, index)}
                        keyExtractor={(item, index) => item + index.toString()}
                    />

                    <View style ={{
                        position : 'absolute',
                        flex : 1,
                        alignContent : 'stretch',
                        flexDirection : 'row'
                    }}>
                        <ContentDetailHeaderView />

                    </View>

                </View>
                
        </View>

        )
    }

    componentDidMount() {
        // this.loadData(1633)

        //글자수 긴것.
        this.loadData(1634)
    }

    async loadData(cid) {

        console.log('loadData !!')
        let result = []

        try {
            result = await netRequest.getContentDetailList(cid)
        } catch (err) {
            console.log(`loaddata',"error code -> ${err}`)
        }
        let dataList = []
        dataList.push(new ContentsItem(result))
        let contentsDetailLength = result['contents-detail'].length

        for (let i = 0; i < contentsDetailLength; i++) {
            dataList.push(new ContentsDetailItem(result['contents-detail'][i]))
        }

        this.setState({
            dataSource: dataList
        }, function () {
            // console.log('dataSource',this.state.dataSource)
        })
    }
}