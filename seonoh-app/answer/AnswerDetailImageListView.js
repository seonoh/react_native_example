import { Image, View, Text } from 'react-native'
import React from 'react'

export default class AnswerDetailImageListView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            dataSource: this.props.imageList
        };

        // this.setState({
        //     dataSource : this.props.imageList
        // })


        // console.log('imageList@#@# ',imageList)
    }

    // componentDidMount() {
    //     this.setState({
    //         dataSource: 
    //     })
    // }

    render() {
        // console.log("imageListTEST@#@#",this.state.dataSource[0])


        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                width: 300,
                height: 300
            }}>

                <View style={{
                    flexDirection: 'row',
                    width: 300,
                    height: 84
                }}>
                    {
                        this.state.dataSource[0] != undefined ? <Image
                            style={{
                                width: 80,
                                height: 80,
                                marginRight: 4
                            }}
                            source={{ uri: this.state.dataSource[0] }}
                        ></Image> : <View/>
                    }


                    {
                        this.state.dataSource[1] != undefined ? <Image
                            style={{
                                width: 80,
                                height: 80,
                                marginRight: 4
                            }}
                            source={{ uri: this.state.dataSource[1] }}
                        ></Image> : <View/>
                    }

                    {
                        this.state.dataSource[2] != undefined ? <Image
                            style={{
                                width: 80,
                                height: 80,
                                marginRight: 4
                            }}
                            source={{ uri: this.state.dataSource[2] }}
                        ></Image> : <View />
                    }
                </View>


                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    width: 300,
                    height: 84
                }}>
                    {
                        this.state.dataSource[3] != undefined ? <Image
                            style={{
                                width: 80,
                                height: 80,
                                marginRight: 4
                            }}
                            source={{ uri: this.state.dataSource[3] }}
                        ></Image> : <View />
                    }

                    {
                        this.state.dataSource[4] != undefined ? <Image
                            style={{
                                width: 80,
                                height: 80,
                                marginRight: 4
                            }}
                            source={{ uri: this.state.dataSource[4] }}
                        ></Image> : <View />
                    }

                    {
                        this.state.dataSource[5] != undefined ? <Image
                            style={{
                                width: 80,
                                height: 80,
                                marginRight: 4
                            }}
                            source={{ uri: this.state.dataSource[5] }}
                        ></Image> : <View />
                    }

                </View>

                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    width: 300,
                    height: 84
                }}>
                    {
                        this.state.dataSource[6] != undefined ? <Image
                            style={{
                                width: 80,
                                height: 80,
                                marginRight: 4
                            }}
                            source={{ uri: this.state.dataSource[6] }}
                        ></Image> : <View />
                    }

                    {
                        this.state.dataSource[7] != undefined ? <Image
                            style={{
                                width: 80,
                                height: 80,
                                marginRight: 4
                            }}
                            source={{ uri: this.state.dataSource[7] }}
                        ></Image> : <View />
                    }

                    {
                        this.state.dataSource[8] != undefined ? <Image
                            style={{
                                width: 80,
                                height: 80,
                                marginRight: 4
                            }}
                            source={{ uri: this.state.dataSource[8] }}
                        ></Image> : <View />
                    }

                </View>


            </View>
        )
    }


}