'use server'
import axios from "axios";
import { LoginInputs, RegisterInputs } from "@/app/login/page";


function splitName(fullName: string) {
  const parts = fullName.split(' '); // Splits the string at each space
  if (parts.length >= 2) {
    const firstName = parts[0];
    const lastName = parts.slice(1).join(' '); // Joins the remaining parts back into a string
    return { firstName, lastName };
  } else {
    return { firstName: fullName, lastName: '' }; // Handle cases where there is no space
  }
}
function splitProjectRef(refString: string) {

  const parts = refString.split('/');
  const project = parts[1];

  return project
}




const baseURL = process.env.NEXT_PUBLIC_LOTUS_URL;


export async function handleError(response: any) {
  if (response.status === 401) {
    //Crude start to deauth
    localStorage.clear();
  }
  return response.data
}

export async function login(data: LoginInputs) {

  return await axios
    .post(baseURL + 'proxie/user/login', {
      email: data.email,
      password: data.password

    })
    .then((response) => {
      //Should probably handle response status somewhere in here //dont remember how axios handles it 
      // current api and needs dont match

      // localStorage.setItem('authToken', response.headers['access-token'])
      return response;
    })
    .catch(error => {
      throw handleError(error);
      // throw new Error(`Error fetching user data: ${error.message}`);
    });
};


export const generateToken = async () => {
  try {
    const response = await axios.post(`${baseURL}/auth/token`, {}, {
      headers: {
        'client_id': process.env.NEXT_PUBLIC_LOTUS_CLIENT_ID,
        'client_secret': process.env.NEXT_PUBLIC_LOTUS_CLIENT_SECRET
      }
    });
    return { accessToken: response.data.access_token, projectID: response.data.project.reference, id: response.data.id_token };  // Return token data for further use
  } catch (error) {
    console.error("Error generating token:", error);
    throw error;  // Rethrow the error for further handling
  }
};
export const signUpPatient = async (data: RegisterInputs) => {
  const names = splitName(data.fullName)
  const token = await generateToken();
  const project_id = splitProjectRef(token.projectID)
  let body = {
    email: data.email,
    // phone: "7732020987", TO-DO - Design did not include phone field 
    firstName: names.firstName,
    lastName: names.lastName,
    password: data.password,
  }

  try {
    const response = await axios.post(`${baseURL}/proxie/user/register`, body, {
      headers: {
        'client_id': process.env.NEXT_PUBLIC_LOTUS_CLIENT_ID,   
       'token': token.accessToken 
      }
    });


    return response.data;  // Return token data for further use
  } catch (error) {
    throw error;  // Rethrow the error for further handling
  }
};


export async function SignUp(data: RegisterInputs) {

  return await axios
    .post(baseURL + 'users/sign_in', {
      email: data.email,
      password: data.password

    })
    .then((response) => {
      //Should probably handle response status somewhere in here //dont remember how axios handles it 
      localStorage.setItem('authToken', response.headers['access-token'])
      return response;
    })
    .catch(error => {
      throw handleError(error);
      // throw new Error(`Error fetching user data: ${error.message}`);
    });
};
