# Food ordering App

# CraveIt-name of our app

// listofrestaurants as reslist

- Planning

* Header

- logo
- nav Items

* Body

- search
- Restaurant Container
- Img
- Name of Res,rating etc

* Footer

# EXPORT/IMPORT

-EXPORT DEFAULT COMPONENT
-IMPORT COMPONENT FROM 'PATH'

-Named Cost Components;
-import {Component} from "Path"

# React Hooks

- (Normal Js Function)
- useState -Superpowerful State Varibles
- useEffect -

1. if no [] array useEffect is called every render cycle.
2. if [] is empty useEffect is called is called on intial render just once
3. if you have a dependecy then useEffect is called when dependency changes.

<!-- const App = () => {
  return (
    <div>
    <Header/>
   <Outlet/>
    </div>
  )
}

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Body/>

      }
      ,
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/cart",
        element:<Cart/>
      },
    ],
    errorElement:<Error/>,
  }

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);



export default App; -->

not able to use useRoutError() in BrowserRouter

# 2 types of Routing in webapps

- Client Side Routing
- Server Side Routing
