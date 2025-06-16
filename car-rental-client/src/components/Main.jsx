import { Provider } from "react-redux"
import store from "../data/Store"
import { BrowserRouter } from "react-router-dom"
import { Routing } from "../Routing/Routing"
import Nav from "../Routing/Nav"

export const Main=()=>{
return<>
<Provider store={store}>
    <BrowserRouter>
 <Nav></Nav>
 <div style={{ paddingTop: "5vw" }}>
        <Routing ></Routing>   
</div>
    </BrowserRouter>
</Provider>
</>
}
