import { AddType } from "./add/AddType"
import {AddCompany} from './add/AddCompay'
import {AddCity} from './add/AddCity'
import {AddDriveType} from './add/AddDriveType'
import './style_add.css'
export const AddOther = () =>
{
    return<div id="all">
    <div className="add">
    <AddCity></AddCity>
    </div>
    <div className="add">
    <AddCompany></AddCompany>
    </div>
    <div className="add">
    <AddDriveType></AddDriveType>
    </div>
    <div className="add">
    <AddType></AddType>
    </div>
    </div>
}