import Navbar from "./components/Navbar"
import Model from "./components/Model"
function App() {
  return (
    <div className="bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/h_4096,w_1927,c_fit,f_auto,q_auto:best/Homepage-Model-3-LHD-Mobile')] lg:bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/h_2560,w_4096,c_fit,f_auto,q_auto:best/Homepage-Model-3-Desktop-LHD')] h-screen bg-cover bg-center">
      <Navbar/>
      <Model/>
    </div>
  );
}

export default App; 
