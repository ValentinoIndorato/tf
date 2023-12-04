
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Pagina1 from "./component/Pagnina1"
function Routes (){
    const router = createBrowserRouter([
        {
            path: "/pag",
            element: < Pagina1/>,
        },
        
       
      ])
return <RouterProvider router={router} />
}
export default Routes