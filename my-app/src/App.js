import React from "react";
// import Fragment from "./Components/Fragment/Fragment";
// import DataFetch from "./Components/Fetching/DataFetch";
// import FAQs from "./Components/Toggle/FAQs";
// import Data from './Data.json';
// import Card1 from "./Components/Card/Card1";
// import Mapping from "./Components/Mapping/Mapping";
// import CounterApp2 from "./Components/CounterApp/CounterApp2";
// import Home from "./Components/Form/Home";
// import Signup from "./Components/useFormik/Signup";
// import Users from "./Components/PropType/Users";
// import Index from "./Components/Pages/Index";
import Card from "./Components/httpMethods/Card";

const App = () => {
    return (
        <div>
            {/* <FAQs Data={Data} /> */}
            {/* {Data.map((data) => <Card1 key={data.id} des={data.des} title={data.title} />)} */}
            <Card />
        </div>
    )
}

export default App;