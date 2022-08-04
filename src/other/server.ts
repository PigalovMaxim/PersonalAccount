import axios, { AxiosResponse } from "axios";
export async function loginRequest(login: string, password: string) : Promise<boolean> {
    const answer : AxiosResponse<boolean> = await axios.get(
        `http://localhost:3001/users/login?login=${login}&password=${password}`
    );
    return answer.data;
}
export async function registrationRequest(login: string, password: string) : Promise<boolean> {
    const answer : AxiosResponse<boolean> = await axios.get(
        `http://localhost:3001/users/registration?login=${login}&password=${password}`
    );
    return answer.data;
}