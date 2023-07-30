import { Inject, Injectable } from "@angular/core";
import { AxiosService } from "../axios";

@Inject
export class ReferralApi{
    
    constructor(private axiosService: AxiosService){}

    public getAllEstablishments = async () => {
        return await this.axiosService.get({url:'/medicationReferal/getAllEstablishments'})
    }
}
