/* 
    过滤特殊字符
*/
export function stripscript(str){
    var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]")
    var rs = "";
    for (var i = 0; i < str.length; i++) {
        rs = rs+str.substr(i, 1).replace(pattern, '');
    }
    return rs;
}
/*
    验证邮箱
 */
export function validateEmail(value){
    let reg = /^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/
    return !reg.test(value) ? true : false          //三目运算
    // if(!reg.test(value)){
    //     return true
    // }else{
    //     return false
    // }
}