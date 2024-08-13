import NavBar from "./navBar";
import BillBoard from "./billBoard";
import Footer from "./footer";
import Section1 from "./section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
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