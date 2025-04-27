import { Password } from "@mui/icons-material"
import axios, { Axios } from "axios"

const baseUrl = 'https://localhost:7067/api'

export const getCars = () => {
    return axios.get(`${baseUrl}/Cars`)
    //  .then(result=>{
    //     console.log(result.data)
    //     return result.data.length}
    //  ).catch(e=>
    //  {
    //     throw e
    //  })

}
export const up_img = (car, img) => {
    return axios.post(`${baseUrl}/Cars/img`, car, img)
}
export const getCarByCode = (code) => {
    return axios.get(`${baseUrl}/Cars/${code}`)
}
export const addCar = (car) => {
    return axios.put(`${baseUrl}/Cars`, car)
}
export const deleteCar = (code) => {
    console.log(code)
    return axios.delete(`${baseUrl}/Cars/${code}`)
}
export const getCompany = () => {
    return axios.get(`${baseUrl}/company`)
}
export const addCompany = (company) => {
    console.log(company)
    axios.put(`${baseUrl}/Company`, company)
        .then((x) =>
            x.data)
        .catch(error =>
            console.log(error)
        );
}
export const getDriveType = () => {

    return axios.get(`${baseUrl}/DriveTypes`)

}
export const addDriveType = (drive_type) => {
    axios.put(`${baseUrl}/DriveTypes`, drive_type)
        .then((x) =>
            x.data)
        .catch(error =>
            console.log(error)
        );
}
export const getCity = () => {
    return axios.get(`${baseUrl}/Cities`)
}
export const addCity = (city) => {
    axios.put(`${baseUrl}/Cities`, city)
        .then((x) =>
            x.data)
        .catch(error =>
            console.log(error)
        );
}
export const getTypeVehicle = () => {
    return axios.get(`${baseUrl}/TipeVehicle`)
}

export const addTypeVehicle = (typevehicle) => {
    return axios.put(`${baseUrl}/TipeVehicle`, typevehicle)

}
export const deleteTypeVehicle = (code) => {
    console.log(code)
    return axios.delete(`${baseUrl}/TipeVehicle/${code}`)
}
export const getModel = () => {
    return axios.get(`${baseUrl}/Models`
    );
}

export const addModel = (model) => {
    return axios.put(`${baseUrl}/Models`, model)
}
export const deleteModel = (code) => {
    return axios.delete(`${baseUrl}/Models/${code}`)
}
export const addUser = (user) => {
    return axios.put(`${baseUrl}/Users`, user)
}
export const findUser = (name, password) => {
    return axios.get(`${baseUrl}/Users/${name},${password}`)
}
export const getUsers = () => {
    return axios.get(`${baseUrl}/Users`);
}
export const addLending = (lending) => {
    return axios.put(`${baseUrl}/Lendings`, lending)
}
export const getLendings = () => {
    return axios.get(`${baseUrl}/Lendings`);
}
export const return_car = (code) => {
    console.log(code)
    return axios.post(`${baseUrl}/Lendings?code=${code}`)
}