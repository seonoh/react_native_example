import React,{Component} from 'react'
import {View, Text, FlatList, Image} from 'react-native'
import ContentDetailHeaderView from './ContentDetailHeaderView'
import netRequest from '../netRequest'
import ContentsItem from '../model/ContentsItem'
import ContentsDetailItem from '../model/ContentsDetailItem'

export default class ContentDetailRootView extends Component{

    constructor(props) {
        super(props);
        this.state = {
            dataSource: []
        };
    }

    renderContensDetailItem = (item,index)=>{
        if(index == 0){
            console.log('탄다')
            return(
                <View>
                    <Image
                    style ={{
                        alignContent : 'stretch',
                        height : 300
                    }}
                        source = {{uri : item.mainImage}}>

                    </Image>
                    <Text>
                        {item.si}
                    </Text>
                </View>
            )
        }
    }

    render(){
        return(
            <View>

                    <FlatList
                        data = {this.state.dataSource}
                        renderItem = {({item,index}) => this.renderContensDetailItem(item,index)}
                        keyExtractor={(item,index) => item+index.toString()}
                    />

                    <ContentDetailHeaderView/>

            </View>
        )
    }

    componentDidMount(){
        this.loadData(1633)
    }

    async loadData(cid) {

        let result = []

        try {
            result = await netRequest.getContentDetailList(cid)
        } catch (err) {
            console.log(`loaddata',"error code -> ${err}`)
        }
        let dataList = []
        dataList.push(new ContentsItem(result))
        let contentsDetailLength = result['contents-detail'].length

        for( let i =0; i<contentsDetailLength; i++){
            dataList.push( new ContentsDetailItem(result['contents-detail'][i]))
        }

        this.setState({
            dataSource : dataList
        },function(){
            console.log('dataSource',this.state.dataSource)
        })
    }
}