import instance from "./instance";

export const getAll = () =>{
    const url ="/pro";
    return instance.get(url);
}

export const get = (id) =>{
    const url =`/pro/${id}`;
    return instance.get(url);
}

export const add = (pro) =>{
    const url ="/pro";
    return instance.post(url,pro);
}

// export const signin = (user) =>{
//     const url =`/lognin`;
//     return instance.post(url,user);
// }
// export const signup = (user) =>{
//     const url =`/signup`;
//     return instance.post(url,user);
// }
