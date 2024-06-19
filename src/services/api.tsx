import axios from "axios";
import { Inputs } from "@/app/login/page";

const baseURL = `${process.env.NEXT_PUBLIC_API_URL}`;

export function handleError(response: any){
  if(response.status === 401){
      //Crude start to deauth
      localStorage.clear();

  }
  return  response.data
}

export async function login(data: Inputs ) {

  return await axios
      .post(baseURL + 'users/sign_in', {
          email: data.email,
          password: data.password })
      .then((response) => {

          //Should probably handle response status somewhere in here //dont remember how axios handles it
          localStorage.setItem('authToken', response.headers['access-token'])
          return response;
      })
      .catch(error => {
          throw handleError(error.response);
          // throw new Error(`Error fetching user data: ${error.message}`);
      });
};

