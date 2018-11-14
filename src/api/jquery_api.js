
// 原生,原生js的ajax+promise
import request from './jquery_config'

// 使用qs库对post提交的数据进行格式化
import qs from 'qs';


export function getStuData(params) {
    return request({
        url: '/api/selectData',
        method: 'get',
        params
    })
}



// add
export function addDataToStu(params) {
    return request({
        url: '/v2/store/order',
        method: 'post',
        data: qs.stringify(params)
    })
}

// config 对象  config ={里面都是 config对象的属性}

// delete
export function deleteById(params) {
    console.log(params)
    return request({
        url: '/api/deleteById',
        method: 'get',
        params
    })
}


// update
export function updataById(params) {
    return request({
        url: '/api/updataById',
        method: 'post',
        data: qs.stringify(params)
    })
}


/*
数据调用
// 添加---------------------> 要添加的数据, 对象形式         
                addDataToStu({name:"",sex:""}).then((res) => {
                    console.log(res)
                })


// 删除--------------------->要删除的数据的id
                deleteById({id:id}).then((res)=>{
                    console.log(res)
                })


// 更新-------------------> 要修改的数据
                updataById({id:"",name:"",sex:""}).then((res) => {
                    console.log(res)
                })


// 查询
                getStuData().then((res) => {
                    console.log(res)
                })

*/