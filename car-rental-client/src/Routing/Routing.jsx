import { Route,Routes } from "react-router-dom"
import {Home} from "../components/Home"
import {FilterCars} from '../components/FilterCars'
import { StepLogin1 } from "../components/StepLogin1"
import { Manager } from "../components/Manager/Manger"
import { ManagerRegister } from "../components/ManagerRegister"
import { CommingSoon } from "../components/ComingSoon"
import { Payment } from "../components/payment"
import Questions from "../components/Questions"
import { Contact } from "../components/Contact"
import { Rental } from "../components/Rental"
import AdminLayout from "../components/Manager/AdminLayout"
import { AddOther } from "../components/Manager/AddOther"
import Delete from "../components/Manager/Delete/Delete"
import { ListUser } from "../components/Manager/Users"
import { ListRentals } from "../components/Manager/Rentals"
import { AddModel } from "../components/Manager/add/AddModel"
import DelList from "../components/ListToDelete"
import { AddCar } from "../components/Manager/add/AddCar"


export const Routing = () => {
    return <>
        <Routes>
        <Route path="home" element={<Home></Home>}> </Route>
        <Route path="" element={<Home></Home>}> </Route>
        <Route path="login" element={<StepLogin1></StepLogin1>}></Route>
        <Route path="payment" element={<Payment></Payment>}></Route>
        <Route path = "AddRental/:car" element ={<Rental></Rental>}></Route>
        <Route path = "search_car" element = {<FilterCars></FilterCars>}></Route>
        <Route path = "manager" element ={<AdminLayout></AdminLayout>}>
            <Route path="add/other" element={<AddOther />} />
            <Route path="add/car" element={<AddCar />} />
            <Route path="add/model" element={<AddModel />} />
            <Route path="delete/car" element={<DelList />} />
            <Route path="delete/model" element={<Delete />} />
          <Route path="users" element={<ListUser />} />
          <Route path="orders" element={< ListRentals/>} />
        </Route>
        <Route path = "ManagerRegister" element ={<ManagerRegister></ManagerRegister>}></Route>
        <Route path = "comingsoon" element ={<CommingSoon></CommingSoon>}></Route>
        <Route path = "questions" element ={<Questions></Questions>}></Route>
        <Route path = "contact" element ={<Contact></Contact>}></Route>

        </Routes>
    </>
}