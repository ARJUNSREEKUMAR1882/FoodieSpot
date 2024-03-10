import { commonApI } from "./commonAPI"
import { SERVER_URL } from "./server_url"

export const uploadFoodieSpotAPI=async(data)=>{
    return await commonApI("POST",`${SERVER_URL}/restuarents`,data)
}

export const getAllFoodieSpotAPI=async()=>{
    return await commonApI("GET",`${SERVER_URL}/restuarents`,"")
}

export const removeFoodSpotAPI=async(data)=>{
    return await commonApI("DELETE",`${SERVER_URL}/restuarents/${data}`,{})
}


