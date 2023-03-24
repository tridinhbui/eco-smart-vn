import http from "./http";

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
    return data;
  } catch (e) {
    console.log(e);
  }
}

export async function addPost(content, title, type) {
  try {
    const {data} = await http.post('/api/addPost', {content, title, type});
    return data; 
  } catch(e) {
    console.log(e);
  }
}

export async function updatePost(content, title, id, status,type) {
  try {
    const {data} = await http.post('/api/updatePost', {content, title, id, status, type});
    return data; 
  } catch(e) {
    console.log(e);
  }
}

export async function deletePost(id) {
  try {
    const {data} = await http.post('/api/deletePost', {id });
    return data; 
  } catch(e) {
    console.log(e);
  }
}

export async function getPost(type) {
  try {
    const {data} = await http.post('/api/getPost', {type});
    return data; 
  } catch(e) {
    console.log(e);
  }
}
