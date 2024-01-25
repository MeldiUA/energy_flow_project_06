import axios from 'axios';

const BASE_URL = "https://energyflow.b.goit.study/api";
axios.defaults.baseURL = BASE_URL;

async function getExercises (bodypart = "", muscles = "", equipment = "", keyword = "", page, limit){


    const response = await axios.get("/exercises", {
       params: {
           bodypart,
           muscles,
           equipment,
           keyword,
           page,
           limit,
       }
   })
   return response.data;
   
}


export async function getExercisesByBodyPart (bodypart, page = 1, limit = 200){
    return getExercises(bodypart, "", "", "", page, limit);

}

export async function getExercisesByMuscles ( muscles, page = 1, limit = 200){

    return getExercises("", muscles, "", "", page, limit);

   
}

export async function getExercisesByEquipment ( equipment, page = 1, limit = 200){

    return getExercises("", "", equipment, "", page, limit);
}

export async function searchExercisesByWord (keyword, page = 1, limit = 200) { 
    return getExercises("", "", "", keyword, page, limit)
} ;

export async function getFilter (filter = "Muscles", page = 1, limit = 200){


    const response = await axios.get("/filters", {
       params: {
           filter,
           page,
           limit,
       }
   }
   )
   return response.data;
}

export async function getExerciseById(id){
    const response = await axios.get(`/exercises/${id}`);
   
    return response.data; 
}

export async function getQuote(){
    const response = await axios.get(`/quote`);
   
    return response.data; 
}

export async function postSubscriptions(email){
    const response = await axios.post('/subscription', { "email": email });
    //409 error такий email вже підписаний
    return response.data;
}