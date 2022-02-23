import instance from "./instance";

export const getCateAll = () =>{
    const url ="/cates";
    return instance.get(url);
}

export const getCate = (id) =>{
    const url =`/cates/${id}`;
    return instance.get(url);
}

export const add = (cate) =>{
    const url ="/cates";
    return instance.post(url,cate);
}
export const remove = (id) =>{
    const url =`/cates/${id}`;
    return instance.delete(url);
}

export const update = (cate) => {
    const url = `/cates/${cate.id}`;
    return instance.put(url, cate);
}
