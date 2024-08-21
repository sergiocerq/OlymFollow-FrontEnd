import {DataFetcher} from "./DataFetcher.js";
import {User} from "../classes/user.js";

export class UserFetcher extends DataFetcher{

    async getCurrentUser(){
        let id = sessionStorage.getItem("userID");
        let response =  await this.httpService.get(`/user?id=${id}`);
        return response.data;
    }

    async getUserById(id){
        const response = await this.httpService.get(`/user?id=${id}`);
        return response.data.map((user) => new User(user));

    }

    async deleteUserById(){
        let id = sessionStorage.getItem("userID");
        return await this.httpService.delete(`/user/${id}`);

    }

    async getUserByName(username){
        const data = await this.httpService.get(`/user/${username}`);
        return data.map((user) => new User(user));
    }

    async subscribe(countryID){     
        console.log(countryID)
        let userID = sessionStorage.getItem("userID");   
        return await this.httpService.post(`user/subscribe/${userID}/${countryID}`);
    }

    async unsubscribe(countryID){     
        let userID = sessionStorage.getItem("userID");   
        return await this.httpService.delete(`user/unsubscribe/${userID}/${countryID}`);
    }

}