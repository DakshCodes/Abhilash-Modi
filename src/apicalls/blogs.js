import axios from "axios";



// register user
export const Addblogs = async (payload) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/blogs/add-blogs`, payload);
        return response.data;
    } catch (error) {
        return error.message
    }
}

// login user
export const Getblogs = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/blogs/get-blogs`);
        return response.data;
    } catch (error) {
        return error.message
    }
}

export const UploadImage = async(payload) =>{
    try {
        const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/blogs/upload`,payload);
        return response.data;
        
    } catch (error) {
        return error.message;
    }
}

// get current user
export const GetblogsByID = async (id) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/blogs/get-blogs-by-id/${id}`);
        return response.data;
    } catch (error) {
        return error.message
    }
}
