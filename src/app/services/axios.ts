import { Injectable } from '@angular/core';
import axios, { AxiosRequestConfig, AxiosResponse, AxiosInstance, AxiosError } from 'axios';
import { Observable, throwError } from 'rxjs';
import { ErrorHandler } from "@angular/core";

export interface Params {
    [key: string]: any;
}
export interface GetOptions {
    url: string;
    params?: Params;
}
export interface ErrorResponse {
	name: string;
	code: string;
	message: string;
}

@Injectable({
    providedIn: 'root'
})
export class AxiosService {

    private axiosClient: AxiosInstance;
    constructor(private errorHandler: ErrorHandler) {
        this.errorHandler = errorHandler;

        this.axiosClient = axios.create({
            // timeout: 3000,
            baseURL: 'http://localhost:9002'
        });
    }

    public async get<T>(options: GetOptions): Promise<T> {
        try {
            var axiosResponse = await this.axiosClient.request<T>({
                method: "get",
                url: options.url,
                params: options.params
            });

            return (axiosResponse.data);

        } catch (error) {

            return (Promise.reject(this.normalizeError( error )));

        }

    }
    public async post<T>(options: any): Promise<T> {
        try {
            var axiosResponse = await this.axiosClient.request<T>({
                method: "post",
                url: options.url,
                params: options.params,
                data: options.data
            });

            return (axiosResponse.data);

        } catch (error) {

            return (Promise.reject(this.normalizeError( error )));

        }

    }
    private normalizeError( error: any ) : ErrorResponse {
 
		this.errorHandler.handleError( error );
 
		return({
			name: error.name,
			code: error.code,
			message: error.message
		});
 
	}

}