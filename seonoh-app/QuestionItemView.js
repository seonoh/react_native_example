import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles'

class QuestionItemView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.header} >
                <Image
                    source={require('./ts.jpeg')}
                    style={styles.headerIcon} />
                <Image
                    source={require('./ts.jpeg')}
                    style={styles.headerIcon} />
                <Image
                    source={require('./ts.jpeg')}
                    style={styles.headerIcon} />
                <Image
                    source={require('./ts.jpeg')}
                    style={styles.headerIcon} />
                <Text
                    style={styles.headerTitle}>
                    질문답변
                </Text>
                <Image
                    source={require('./ts.jpeg')}
                    style={styles.headerIcon} />
                <Image
                    source={require('./ts.jpeg')}
                    style={styles.headerIcon} />
            </View>
        );
    }
}

export default QuestionItemView