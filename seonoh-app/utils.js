exports.checkData = (name,data)=> {
    if(data == undefined || data == '' || data == null || data == 'null'){

        // console.log(`${name} -->  is invalid data !!! type : ${typeof data} // ${data}`)

        switch(typeof data){
            case 'number' : {
                // console.log(`${data} is number`)
                break;
            }
            case 'boolean' : {
                // console.log(`${data} is boolean `)
                break;
            }
            default : {
                data = ''
            }
        }
    }else{

        switch(name){
            case 'written-date-time' : {
                data = data.split(",")[0]
                break;
            }
            case 'user-title' : {
                data = data[0]['title']
                break;
            }
            case 'user-title-color' : {
                data = data[0]['color']
                break;
            }
            default : break
        }
        // console.log(`${name} -->  is valid data`)
    }
    // console.log(`final data is ${JSON.stringify(data)}`)
    return data
}

exports.classifyCategoryType = (directory)=>{
    let category = ''
    switch (directory) {
        case 1: {
            category = '일상생활'
            break;
        }
        case 2: {
            category = '여행후기'
            break;
        }
        case 3: {
            category = '여행지팁'
            break;
        }
        case 4: {
            category = '리얼맛집'
            break;
        }
        case 5: {
            category = '쇼핑꿀팁'
            break;
        }
        case 6: {
            category = '교통꿀팁'
            break;
        }
        case 7: {
            category = '뷰티꿀팁'
            break;
        }
        case 8: {
            category = '문화역사'
            break;
        }
        case 9: {
            category = '언어꿀팁'
            break;
        }
        case 10: {
            category = '요즘한국'
            break;
        }
        default: category = "선오"
    }
    return category
}