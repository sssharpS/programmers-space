import axios from 'axios';

const api=axios.create({
    baseURL:process.env.REACT_APP_BASE_ADDRESS,
    withCredentials:true,//pass cookie at the client
    headers:{
        "Content-Type":'application/json',
        Accept:'application/json',

    }

});

// end-Points

export const sendOtp=(data)=>{
    return api.post('/api/send-otp',data)
};

export const sendOtpViaEmail=(data)=>{
    return api.post('/api/send-otpEmail',data);
}
export const verifyOtp=(data)=>{
   return api.post('/api/verify-otp',data);
}

export const activateUser=(data)=>{
    return api.post('/api/activate-user',data);
    
}

export const logOut=(data)=>{
    return api.post('/api/logout',data);
}

export const fectchRooms=()=>{
     return api.get('/api/rooms');
}


export const createRoom=(data)=>{
    return api.post('/api/create-room',data);
}

export const deleteAccount=(data)=>{
    return api.post('/api/deleteAccount',data);
}



