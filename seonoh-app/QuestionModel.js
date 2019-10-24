export default class QuestionModel{
    constructor(
        senedWenwoUserId,
        senedNickName,
        senedProfileImage,
        senedCertificationType,
        senedCertificationColor,
        senedCurrentAddress,
        senedPosition,
        senedLevel,
        senedQuestionIdNum,
        senedWrittenDateTime,
        senedAdopted,
        senedDirectory,
        senedTitle,
        senedContent,
        senedSi,
        senedGu,
        senedDong,
        senedLat,
        senedLon,
        senedImages,
        senedQuestionPosition,
        senedType,
        senedIsStored,
        senedViewCount,
        senedIsAnswered
    ){
        let questionModel = Object();
        questionModel.wenwoUserId = senedWenwoUserId
        questionModel.nickName = senedNickName
        questionModel.profileImage = senedProfileImage
        questionModel.certificationType = senedCertificationType
        questionModel.certificationColor = senedCertificationColor
        questionModel.currentAddress = senedCurrentAddress
        questionModel.position = senedPosition
        questionModel.level = senedLevel
        questionModel.questionIdNum = senedQuestionIdNum
        questionModel.writtenDateTime = senedWrittenDateTime
        questionModel.adopted = senedAdopted
        questionModel.directory = senedDirectory
        questionModel.title = senedTitle
        questionModel.content = senedContent
        questionModel.si = senedSi
        questionModel.gu = senedGu
        questionModel.dong = senedDong
        questionModel.lat = senedLat
        questionModel.lon = senedLon
        questionModel.images = senedImages
        questionModel.questionPostion = senedQuestionPosition
        questionModel.type = senedType
        questionModel.isStored = senedIsStored
        questionModel.viewCount = senedViewCount
        questionModel.isAnswered = senedIsAnswered
    }
}