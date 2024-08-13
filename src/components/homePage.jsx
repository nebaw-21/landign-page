import NavBar from "./navBar.jsx";
import BillBoard from "./billBoard.jsx";
import Footer from "./footer.jsx";
import Section1 from "./section1.jsx";
import Section2 from "./Section2.jsx";
import Section3 from "./Section3.jsx";
import Section4 from "./Section4.jsx";
export default function HomePage(){
    return (
        <>
          <BillBoard>
            <NavBar />
          </BillBoard>
           
        <Section1/>
            
        <Section2/>

         <Section3 />

      <Section4 />

          < Footer />
        </>
      );
    
}