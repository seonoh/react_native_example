import { Text } from 'react-native'
import React,{ Component } from 'react'

let userTitle = ''
class UserTypeView extends React.Component{
    render(){
        const { position } = this.props
         if(position != undefined){
                    //여행객
                if(position == 0){
                    userTitle = "여행객"
                    //유학생
                }else if(position == 1){
                    userTitle = "유학생"
                    //거주민
                }else if(position == 2){
                    userTitle = "거주민"
                    //한국인
                }else if(position == 3){
                    userTitle = "한국인"
                }
            }
        return(
            <Text style = {{
                color : 'white',
                width : 40,
                height : 18,
                fontSize : 10 ,
                alignSelf : 'center',
                textAlign : 'center',
                textAlignVertical : 'center',
                backgroundColor : 'red',
                borderRadius : 20,
                marginLeft : 6
            }}>
                {userTitle}
            </Text>
        );
    }
}

export default UserTypeView