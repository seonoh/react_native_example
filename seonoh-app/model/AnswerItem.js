import { checkData } from '../utils'

export default class AnswerItem {
    constructor(answerItem) {
        return this.createAnswerModel(answerItem)
    }
    createAnswerModel = (answerItem)=>{
        let answerModel = Object();
        answerModel.questionAnswerIdNum = checkData('question-answer-id-num', answerItem['question-answer-id-num']) // Answer, Detial 살짝 다름. Num 붙고 안붙고 차이.
        answerModel.answerIdNum = checkData('answer-id-num', answerItem['answer-id-num'])
        answerModel.answerIdNum = checkData('current-address', answerItem['current-address']) // Answer, Detail
        answerModel.position = checkData('position', answerItem['position']) // Answer, Detail
        answerModel.wenwoUserId = checkData('wenwo-user-id', answerItem['wenwo-user-id']) // Answer, Detail
        answerModel.nickName = checkData('nick-name', answerItem['nick-name']) // Answer, Detail
        answerModel.profileImage = checkData('profile-image', answerItem['profile-image']) // Answer, Detail
        answerModel.certificationType = checkData('certification-type', answerItem['certification-type']) // Answer, Detail
        answerModel.certificationColor = checkData('certification-color', answerItem['certification-color']) // Answer,Detail
        answerModel.level = checkData('level', answerItem['level']) // Answer,Detail
        answerModel.writtenDateTime = checkData('written-date-time', answerItem['written-date-time']) // Answer, Detail
        answerModel.content = checkData('content', answerItem['content']) // Answer, Detail
        answerModel.isAdopted = checkData('is-adopted', answerItem['is-adopted']) // Answer, Detail
        answerModel.isAuto = checkData('is-auto', answerItem['is-auto']) // Answer, Detail

        // Detail
        answerModel.isQuestionAdopter = checkData('is-question-adopted', answerItem['is-question-adopted'])
        answerModel.questionTitle = checkData('question-title', answerItem['question-title'])
        answerModel.questionUserId = checkData('question-user-id', answerItem['question-user-id'])
        if(answerModel.questionAnswerIdNum == ""){
            answerModel.questionAnswerIdNum = checkData('question-answer-id', answerItem['question-answer-id'])
        }
        // answerModel.questionAnswerId = checkData('question-answer-id', answerItem['question-answer-id'])
        answerModel.answerId = checkData('answer-id', answerItem['answer-id'])

        try{
            answerModel.userTitle = checkData(`user-title`, answerItem['user-title'][0]['title']) // Answer,Detail
        }catch(err){
            answerModel.userTitle = ''
        }

        try {
        answerModel.userTitleColor = checkData(`user-title-color`, answerItem['user-title'][0]['color']) // Answer,Detail
            
        } catch (error) {
            answerModel.userTitleColor = 'white'
        }

        answerModel.images = checkData('images', answerItem['images']) // Answer,Detail
        answerModel.likeCount = checkData('like-count', answerItem['like-count'])
        answerModel.answerCommentCount = checkData('answer-comment-count', answerItem['answer-comment-count'])
        answerModel.isAnswerLike = checkData('is-answer-like', answerItem['is-answer-like']) // Answer,Detail
        return answerModel
    }
}