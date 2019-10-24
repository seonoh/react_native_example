import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles'
import BaseHeaderView from "./baseComponent/BaseHeaderView"

export default class DetailHeaderView extends BaseHeaderView {

    render() {
        const { headerTitle } = this.props
        return (
            <View style ={{
                backgroundColor: '#f3f3f3'
            }}>

            <BaseHeaderView
             backColor = '#f3f3f3'>
                <Image
                    source={require('./res/question_detail/btn_cancel_bl.png')}
                    style={{
                        width: 30,
                        height: 30
                    }} />
                <Image
                    style={{
                        width: 30,
                        height: 30
                    }} />
                <Text style={styles.headerTitle}>
                    {headerTitle}
                </Text>
                <Image
                    source={require('./res/question_detail/btn_editor_share_off.png')}
                    style={{
                        width: 30,
                        height: 30
                    }} />
                <Image
                    source={require('./res/question_detail/btn_save_off.png')}
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
