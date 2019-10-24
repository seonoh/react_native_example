import React from 'react';
import { View, Image } from 'react-native';
import BaseHeaderView from "../baseComponent/BaseHeaderView"

export default class ContentDetailHeaderView extends BaseHeaderView {

    render() {
        return (
            <View style ={{

            }}>

            <BaseHeaderView
                backColor = '#00ff0000'>
                <Image
                    source={require('../res/question_detail/btn_cancel_bl.png')}
                    style={{
                        width: 30,
                        height: 30
                    }} />
                <Image
                    style={{
                        flex : 1,
                        width: 30,
                        height: 30
                    }} />
                <Image

                    source={require('../res/question_detail/btn_editor_share_off.png')}
                    style={{

                        width: 30,
                        height: 30
                    }} />
                <Image
                    source={require('../res/question_detail/btn_save_off.png')}
                    style={{
                        width: 30,
                        height: 30,
                        marginLeft: 8
                    }} />
            </BaseHeaderView>
            </View>

        );
    }
}
