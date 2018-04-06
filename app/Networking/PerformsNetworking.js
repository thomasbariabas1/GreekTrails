/**
 * Created by thoriampas on 3/24/2018.
 */
import performNetworkOperation  from './index'
const Get = ({url,params,data,headers,timeout})=>{
   return performNetworkOperation({url,method:'get',params,data,headers,timeout})
}
const Post = ({url,params,data,headers,timeout})=>{
    return performNetworkOperation({url,method:'post',params,data,headers,timeout})

}
const Put = ({url,params,data,headers,timeout})=>{
    return performNetworkOperation({url,method:'put',params,data,headers,timeout})

}
const Delete = ({url,params,data,headers,timeout})=>{
    return performNetworkOperation({url,method:'delete',params,data,headers,timeout})

}

export {Get,Post,Put,Delete}