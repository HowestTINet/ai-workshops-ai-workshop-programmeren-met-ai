import {apiRequest} from "../lib/api.ts";
import { saveImageFromUrl } from "../lib/file.ts";





export async function createImageUrl(prompt: string){
    const request = {
        model: "dall-e-3",
        prompt,
        n: 1, // don't change this!!!
        size: "1024x1024", // don't change this!!!
    }
    const response = await apiRequest("https://api.openai.com/v1/images/generations", request);


    const imageUrl = response.data[0].url; 

    return imageUrl;
}
