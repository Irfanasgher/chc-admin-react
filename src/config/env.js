// export const base = 'http://192.168.10.2:8000';

export const base = 'https://www.data-trades.hexaadev.com';

export const config = async () => {
    let token = await  localStorage.getItem('userToken');
    return {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': "application/json",
        }}

}

export const multipartConfig = async () => {
    let token = await  localStorage.getItem('userToken');
    return {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': "application/json",
            "Content-Type": "multipart/form-data"
        }}

}