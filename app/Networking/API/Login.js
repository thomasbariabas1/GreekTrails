/**
 * Created by thoriampas on 3/24/2018.
 */

import {Post} from '../PerformsNetworking'


const Login = ({data})=>{
    const url = '/user/login'
    return Post({url,data})
}

export default Login