import axious from 'axios'

var config = {
//    headers : { "wenwo-token" : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjE2NTkyIiwibGFuZyI6MSwib3MiOjEsImNvdW50cnk"}
   headers : { "wenwo-token" : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTU0MzAsImxhbmciOjIsIm9zIjoxLCJjb3VudHJ5IjoiS1IiLCJpYXQiOjE1NzE4MjAxNjcsImV4cCI6MTU3NDQxMjE2N30.mGWpJ4eQtZHltxeHzFwYHzYBR3bRV9gYR_6YqaUYINs"}
}


// GET
// 질문 상세보기
// https://api-dev.hanguowenwo.cn/mobile/questions/${qid}?last-question-answer-id=${lastQuestionAnswerId}
exports.getQuestionDetailList = async(qid,lastQuestionAnswerId)=>{
    let result = '';
    try {
        result = await axious(`https://api-dev.hanguowenwo.cn/mobile/questions/${qid}?last-question-answer-id=${lastQuestionAnswerId}`,config)
    } catch (err) {
        console.log(`networkRequest ERROR --->> ${err}`)
    }
    return result['data']
}

// GET
// 답변 상세보기
// https://api-dev.hanguowenwo.cn/api/v1/answers/${qaid}?last-comment-id=0
exports.getAnswerDetailList = async(qaid,lastCommentId)=>{
    let result = '';
    try {
        result = await axious(`https://api-dev.hanguowenwo.cn/api/v1/answers/${qaid}?last-comment-id=${lastCommentId}`,config)
    } catch (err) {
        console.log(`networkRequest ERROR --->> ${err}`)
    }
    return result['data']
}

// POST
// 답변 댓글 작성
// https://api-dev.hanguowenwo.cn/api/v2/answers/${qaid}/comments

var postCommentConfig =(qaid,lastCommentId,text,summonUsers)=> {
    let config = {
        method : 'POST',
        url : `https://api-dev.hanguowenwo.cn/api/v2/answers/${qaid}/comments`,
        headers : { "wenwo-token" : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTU0MzAsImxhbmciOjIsIm9zIjoxLCJjb3VudHJ5IjoiS1IiLCJpYXQiOjE1NzE4MjAxNjcsImV4cCI6MTU3NDQxMjE2N30.mGWpJ4eQtZHltxeHzFwYHzYBR3bRV9gYR_6YqaUYINs"},
        data : {
            'last-comment-id' : lastCommentId,
            'text' : text,
            'summon-users' : summonUsers
        }
    }
      return config
    }

exports.postComment = async(qaid,lastCommentId,text,summonUsers)=>{
    let result = '';
    try {
        result = await axious(postCommentConfig(qaid,lastCommentId,text,summonUsers))
    } catch (err) {
        console.log(`networkRequest ERROR --->> ${err}`)
    }
    return result['data']
}

// GET
// 콘텐츠 상세보기
// https://api-dev.hanguowenwo.cn/api/v2/contents/{cid}
exports.getContentDetailList = async(cid)=>{
    let result = '';
    try {
        result = await axious(`https://api-dev.hanguowenwo.cn/api/v2/contents/${cid}`,config)
    } catch (err) {
        console.log(`networkRequest ERROR --->> ${err}`)
    }
    return result['data']
}