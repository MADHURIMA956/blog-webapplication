import Header from "./components/Header";
import Home from "./components/home/Home";
import Createpost from "./components/DetailPost/Createpost";
import {Box} from "@material-ui/core";
import Postview from "./components/DetailPost/Postview";
import { BrowserRouter,Route , Routes } from "react-router-dom";


function App() {
  return (
   
      <BrowserRouter>
      <Header/>
      <Box >
       <Routes>
          <Route path='/' element={<Home />}> </Route>
          <Route path='/post' element={<Postview/>}></Route>
          <Route path='/create' element={<Createpost/>}></Route>
       </Routes>
      </Box>
      </BrowserRouter>
     
  );
}

export default App;
