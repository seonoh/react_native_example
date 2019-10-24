import { checkData } from '../utils'

export default class CommentItem {
    constructor(commentItem) {
        return this.createCommentModel(commentItem)
    }
    createCommentModel = (commentItem)=>{
        let commentModel = Object();
        commentModel.wenwoUserId = checkData('wenwo-user-id', commentItem['wenwo-user-id'])
        commentModel.nickName = checkData('nick-name', commentItem['nick-name'])
        commentModel.profileImage = checkData('profile-image', commentItem['profile-image'])

        commentModel.certificationType = checkData('certification-type', commentItem['certification-type'])
        commentModel.certificationColor = checkData('certification-color', commentItem['certification-color'])

        commentModel.commentId = checkData('comment-id', commentItem['comment-id'])
        commentModel.writtenDateTime = checkData('written-date-time', commentItem['written-date-time'])
        commentModel.content = checkData('content', commentItem['content'])
        commentModel.summonUsers = checkData('summon-users', commentItem['summon-users'])
        
        return commentModel
    }
}