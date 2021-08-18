import Header from "./component/header";
import Maine  from "./component/Maine";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="container">
      <Header />
      <Maine />
      <Footer className="main-h-screen flex justify-center items-center"/>
    </div>
  );
}

export default App;
