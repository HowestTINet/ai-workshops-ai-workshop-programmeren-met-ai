
import { load } from "dotenv";
const env = await load();
const apiKey: string = env.OPENAI_API_KEY;


export async function apiRequest(url: string, body: any){
    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
    }

    if(body.n !== undefined){
        body.n = 1;
    }

    if(body.max_tokens !== undefined){
        body.n = 300;
    }

    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(body),
        headers
      });

    const json = await response.json();

    return json;
}