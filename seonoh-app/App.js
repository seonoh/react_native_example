import React from 'react';
import ContentDetail from './contents/ContentDetailRootView'
import QuestionDetail from './QuestionDetailRootView'
import AnswerDetail from './answer/AnswerDetailRootView'
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import DetailHeaderView from "./DetailHeaderView";


const Navigator = createStackNavigator(
  {
  ContentsDetail : {
    screen : ContentDetail,
    navigationOptions : () => ({
      header : null
    })
  },

  QuestionDetail : {
    screen : QuestionDetail,
    navigationOptions : () => ({
      header : <DetailHeaderView headerTitle = "질문답변"/>
    })
  },
  AnswerDetail : {
    screen : AnswerDetail,
    navigationOptions : () => ({
      header : null
    })
  }
  },
  {
    initialRouteName : 'ContentsDetail'
  }
)

const App = createAppContainer(Navigator)

export default App

