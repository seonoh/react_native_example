import { checkData } from './utils'
export default class QuestionItem {
    constructor(questionItem) {
        return this.createQuestionModel(questionItem)
    }
    createQuestionModel = (questionItem)=>{
        let questionModel = Object();
        questionModel.wenwoUserId = checkData('wenwo-user-id', questionItem['wenwo-user-id'])
        questionModel.nickName = checkData('nick-name', questionItem['nick-name'])
        questionModel.profileImage = checkData('profile-image', questionItem['profile-image'])
        questionModel.certificationType = checkData('certification-type', questionItem['certification-type'])
        questionModel.certificationColor = checkData('certification-color', ['certification-color'])
        questionModel.currentAddress = checkData('current-address', questionItem['current-address'])
        questionModel.position = checkData('position', questionItem['position'])
        questionModel.level = checkData('level', questionItem['level'])
        questionModel.questionIdNum = checkData('question-id-num', questionItem['question-id-num'])
        questionModel.writtenDateTime = checkData('written-date-time', questionItem['written-date-time'])
        questionModel.adopted = checkData('adopted', questionItem['adopted'])
        questionModel.directory = checkData('directory', questionItem['directory'])
        questionModel.title = checkData('title', questionItem['title'])
        questionModel.content = checkData('content', questionItem['content'])
        questionModel.si = checkData('si', questionItem['si'])
        questionModel.gu = checkData('gu', questionItem['gu'])
        questionModel.dong = checkData('dong', questionItem['dong'])
        questionModel.lat = checkData('lat', questionItem['lat'])
        questionModel.lon = checkData('lon', questionItem['lon'])
        questionModel.userTitle = checkData(`user-title[0]['title']`, questionItem['user-title'][0]['title'])
        questionModel.userTitleColor = checkData(`user-title[0]['color']`, questionItem['user-title'][0]['color'])
        questionModel.images = checkData('images', questionItem['images'])
        questionModel.questionPostion = checkData('question-position', questionItem['question-position'])
        questionModel.type = checkData('type', questionItem['type'])
        questionModel.typeParam = checkData('type-param', questionItem['type-param'])
        questionModel.isStored = checkData('is-stored', questionItem['is-stored'])
        questionModel.viewCount = checkData('view-count', questionItem['view-count'])
        questionModel.isAnswered = checkData('is-answered', questionItem['is-answered'])
        return questionModel
    }
}