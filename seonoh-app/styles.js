import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor : '#f3f3f3'
    },
    questionNickName : {
        fontSize : 12,
        marginLeft : 6
    },
    questionContent: {
        marginTop : 14,
        marginStart : 14,
        marginEnd : 14,
        flex: 1,
        flexDirection: 'row'
    },
    rigihtText: {
        textAlign: 'right'
    },
    levelTitleText: {
        width: 60,
        height: 15,
        borderRadius: 8,
        backgroundColor: 'red'
    },
    header: {
        paddingLeft : 14,
        paddingRight : 14,
        backgroundColor: '#f3f3f3',
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        alignContent : 'center'
    },
    headerIcon: {
        width: 30,
        height: 30
    },
    headerTitle: {
        flex: 1,
        alignContent: 'center',
        textAlign: 'center'
    }
});

export default styles;