import { checkData } from '../utils'

export default class ContentsDetailItem {
    constructor(ContentsDetailItem) {
        return this.createContentsDetailItem(ContentsDetailItem)
    }
    createContentsDetailItem = (ContentsDetailItem)=>{
        let contentsDetailModel = Object();
        contentsDetailModel.contentsDetailId = checkData('contents-detail-id', ContentsDetailItem['contents-detail-id'])
        contentsDetailModel.content = checkData('content', ContentsDetailItem['content'])
        contentsDetailModel.type = checkData('type', ContentsDetailItem['type'])
        contentsDetailModel.ratio = checkData('ratio', ContentsDetailItem['ratio'])
        return contentsDetailModel
    }
}