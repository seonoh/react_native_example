import React from 'react';
import { Text } from 'react-native';
import BaseHeaderView from '../baseComponent/BaseHeaderView';
import styles from '../styles'

export default class AnswerDetailHeaderView extends BaseHeaderView {

    render() {
        const { title } = this.props
        return (
            <BaseHeaderView
             backColor = '#f3f3f3'>
                <Text style={styles.headerTitle}>
                    {title}
                </Text>
            </BaseHeaderView>
        );
    }
}
