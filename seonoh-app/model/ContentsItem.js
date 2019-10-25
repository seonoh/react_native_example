import { checkData } from '../utils'

export default class ContentsItem {
    constructor(contentItem) {
        return this.createContentsModel(contentItem)
    }
    createContentsModel = (contentItem)=>{
        let contentModel = Object();
        contentModel.contentsId = checkData('contents-id', contentItem['contents-id'])
        contentModel.nickName = checkData('nick-name', contentItem['nick-name'])
        contentModel.wenwoUserId = checkData('wenwo-user-id', contentItem['wenwo-user-id'])
        contentModel.level = checkData('level', contentItem['level'])        
        contentModel.profileImage = checkData('profile-image', contentItem['profile-image'])
        contentModel.certificationType = checkData('certification-type', contentItem['certification-type'])
        contentModel.certificationColor = checkData('certification-color', contentItem['certification-color'])
        contentModel.position = checkData('position', contentItem['position'])
        contentModel.category = checkData('category', contentItem['category'])
        contentModel.directory = checkData('directory', contentItem['directory'])
        contentModel.externInfo = checkData('extern-info', contentItem['extern-info'])
        contentModel.title = checkData('title', contentItem['title'])
        contentModel.route = checkData('route', contentItem['route'])
        contentModel.writtenDateTime = checkData('written-date-time', contentItem['written-date-time'])
        contentModel.si = checkData('si', contentItem['si'])
        contentModel.gu = checkData('gu', contentItem['gu'])
        contentModel.dong = checkData('dong', contentItem['dong'])
        contentModel.mainImage = checkData('main-image', contentItem['main-image'])
        contentModel.commentCount = checkData('comment-count', contentItem['comment-count'])
        contentModel.viewCount = checkData('view-count', contentItem['view-count'])
        contentModel.likeCount = checkData('like-count', contentItem['like-count'])
        contentModel.isLike = checkData('is-like', contentItem['is-like'])
        contentModel.isStored = checkData('is-stored', contentItem['is-stored'])

        // console.log('userTitle : ',contentItem['user-title'][0]['title'])

        try{
            contentModel.userTitle = checkData('user-title', contentItem['user-title'])
                }catch(err){
            contentModel.userTitle = ''
        }

        try {
            contentModel.userTitleColor = checkData('user-title-color', contentItem['user-title'])
        } catch (error) {
            contentModel.userTitleColor = 'white'
        }


        

        
        return contentModel
    }
}