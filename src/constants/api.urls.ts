import { string } from 'yup';

type API_URLS_Type = {
    [t in string] : string ; 
}

export const API_URLS : API_URLS_Type = {
    GetArtists : "/artists" ,
    GetPersonalityTypes : "/personalityTypes" ,
    Users : "/users"
}