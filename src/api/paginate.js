import instance from "./instance";

export const paginate =(page,limit)=>{
    const url = `products?_page=${page}&_limit=${limit}`;
    return instance.get(url);
}