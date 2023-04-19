import http from "./http";
import Router from 'next/router';
import redis from '@/lib/redis';
import axios from 'axios';
import { ADD_POST_API, UPDATE_POST_API, DELETE_POST_API, ADD_IMAGE_API, UPDATE_PRODUCT_API,
        GET_POST_API, ADD_PRODUCT_API, GET_PRODUCT_API, DELETE_IMAGE_API, GET_BRAND_API } from '@/config/api';

export async function login(username, password) {
  try {
    const { data, headers } = await http.post('/api/login', { username, password });
    return data;
  } catch (e) {
    console.log(e);
  }
}

export async function logout() {
  try {
    const { data, headers } = await http.post('/api/logout', {});
    return data;
  } catch (e) {
    console.log(e);
  }
}

export async function refresh() {
  try {
    const { data } = await http.post('/api/refresh', {});
    if (data.statusCode===403)
      Router.push('/admin')
    else
      return data;
  } catch (e) {
    console.log(e);
  }
}

export async function addPost(content, title, type, link) {
  try {
    const accessToken = await redis.get('accessToken');
    const { data } = await axios.post(ADD_POST_API, {content, title, type, link}, {headers: {Authorization: `Bearer ${accessToken}`}});
    return data; 
  } catch(e) {
    console.log(e);
  }
}

export async function updatePost(content, title, id, status,type) {
  try {
    const accessToken = await redis.get('accessToken');
    const { data } = await axios.post(UPDATE_POST_API, {content, title, id, status, type}, {headers: {Authorization: `Bearer ${accessToken}`}});
    return data; 
  } catch(e) {
    console.log(e);
  }
}

export async function deletePost(id) {
  try {
    const accessToken = await redis.get('accessToken');
    const { data } = await axios.post(DELETE_POST_API, {id}, {headers: {Authorization: `Bearer ${accessToken}`}});
    return data; 
  } catch(e) {
    console.log(e);
  }
}

export async function getPost(type) {
  try {
    const { data } = await axios.post(GET_POST_API, {type});
    return data; 
  } catch(e) {
    console.log(e);
  }
}

export async function addProduct(files, name, description, initialPrice, salePrice, brand, email, condition) {
  try {
    const accessToken = await redis.get('accessToken');
    let formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append('files', files[i])
    }
    formData.append('name', name);
    formData.append('description', description);
    formData.append('initialPrice', initialPrice);
    formData.append('salePrice', salePrice);
    formData.append('brand', brand);
    formData.append('email', email);
    formData.append('condition', condition);

    const { data } = await axios.post(ADD_PRODUCT_API, formData, {headers: { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'multipart/form-data'}});
    return data; 
  } catch(e) {
    console.log(e);
  }
}

export async function getProduct() {
  try {
    const { data } = await axios.post(GET_PRODUCT_API, {});
    return data; 
  } catch(e) {
    console.log(e);
  }
}

export async function getBrand() {
  try {
    const { data } = await axios.post(GET_BRAND_API, {});
    return data; 
  } catch(e) {
    console.log(e);
  }
}

export async function removeImage(id, url) {
  try {
    const accessToken = await redis.get('accessToken');
    const { data } = await axios.post(DELETE_IMAGE_API, {id, url}, {headers: {Authorization: `Bearer ${accessToken}`}});
    return data; 
  } catch(e) {
    console.log(e);
  }
}

export async function addImage(id, file) {
  try {
    const accessToken = await redis.get('accessToken');
    let formData = new FormData();
    formData.append('files', file)
    formData.append('id', id);
    const { data } = await axios.post(ADD_IMAGE_API, formData, {headers: { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'multipart/form-data'}});
    return data.images; 
  } catch(e) {
    console.log(e);
  }
}

export async function updateProduct(product) {
  try {
    const accessToken = await redis.get('accessToken');
    const { data } = await axios.post(UPDATE_PRODUCT_API, {product}, {headers: {Authorization: `Bearer ${accessToken}`}});
    return data; 
  } catch(e) {
    console.log(e);
  }
}