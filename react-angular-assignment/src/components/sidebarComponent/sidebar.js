import Footer from "../footerComponents/footer";
import MainComp from "../mainComponent/mainComp";
import "./sidebar.css";
const SideBar = () => {
    return (
      <>
        <div className="main-container">
            <div className="sidebar">
              <h1>Sidebar</h1>
              <div className="links">
               <a href="https://google.com" alt="">Google</a>
               <br></br>
               <a href="https://linkedin.com" alt="">LinkedIn</a>
               <br></br>
               <a href="https://twitter.com" alt="">Twitter</a>
               <br></br>
               <a href="https://instagram.com" alt="">instagram</a>
               <br></br>
               <a href="https://youtube.com" alt="">youtube</a>
              </div>
            </div>
            <div className="mainComp">
             <MainComp/>
            </div>

        </div>
        <Footer/>
        </>
      );
}
 
export default SideBar;