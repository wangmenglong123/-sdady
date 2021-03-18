
import { get } from './request'//引入封装的文件中的get方法
export default {
    //登录接口，params是接口所需参数，‘api/v2/auth’是接口地址中不同的后半部分
    //注：此接口是get请求接口，post请求，只需要将return get()换成return post()即可
    login(params) {
        return get('/social/index', params)
    }
}