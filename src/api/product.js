import instance from "./instance";

export const getAll = () => {
  const url = "/products";
  return instance.get(url);
};

export const get = (id) => {
  const url = `/products/${id}`;
  return instance.get(url);
};

export const add = (products) => {
  const url = "/products";
  return instance.post(url, products);
};
export const remove = (id) => {
  const url = `/products/${id}`;
  return instance.delete(url);
};

export const update = (products) => {
  const url = `/products/${products.id}`;
  return instance.put(url, products);
};

export const paginate = (page,limit) => {
  const url =`/products?_page=${page}&_limit=${limit}`;
  return instance.get(url);
};

export const cateproducts = (id) => {
  const url =`/cates/${id}?_embed=products`;
  return instance.get(url);
};

// export const search = () => {
//     const url =``;
//     // return instance.
// };
