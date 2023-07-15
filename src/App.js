import Astrolist from "./Components/Astrotalk/Astrolist";
import Banner from "./Components/Banner/Banner";
import Blogs from "./Components/Blogs/Blogs";
import Button from "./Components/Button/Button";
import Gurujistore from "./Components/Gurujistore/Gurujistore";
import Horoscope from "./Components/Horoscope/Horoscope";
import Navbar from "./Components/Navbar/Navbar";
import Render from "./Components/Specialiteis/Render";
import Successtories from "./Components/Successtories/Successtories";


function App() {
  return (
    <>
    
    <Navbar/>
    <Button/>
    <Banner/>
    <Astrolist/>
    <Render/>
    <Successtories/>
    <Horoscope/>
    <Gurujistore/>
    <Blogs/>
    
    </>
  );
}

export default App;
