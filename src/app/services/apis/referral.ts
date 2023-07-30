import { AxiosService } from "../axios";

let axios: AxiosService ;

const getAllEstablishments =async () => {
    return await axios.get({url:'/getAllEstablishments'})
}


export { getAllEstablishments }