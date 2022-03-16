import axios from "axios";

export default class newsService {
    static async getAll(limitToFirst = 100){
        try {
            const response = await axios.get('https://hacker-news.firebaseio.com/v0/newstories.json?orderBy="$key"',{
                params:{
                    limitToFirst
                }
            })
            return response.data;
        } catch (e) {
            console.log(e);
        }
    }

    static async getNewItem(id){
        try {
            const response = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
            return response.data;
        } catch (e) {
            console.log(e);
        }
    }
}