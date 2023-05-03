import axios from "axios";
const ajaxMock=axios.create({
    baseURL:'/mock',
    timeout:5000
})

export default ajaxMock;