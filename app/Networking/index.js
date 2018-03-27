/**
 * Created by thoriampas on 3/24/2018.
 */
import axios from 'axios'
import config from './config'
import {Alert} from 'react-native'

export default  function performNetworkOperation({
                                                     url,
                                                     method,
                                                     params=null,
                                                     data=null,
                                                     headers = config.headers,
                                                     timeout = config.timeout
                                                 }) {

    let options = {

        baseURL: config.baseURL,
        url,method,data,params,headers,timeout
    }

    return axios(options).then(response=>response).catch(error=>error)


}