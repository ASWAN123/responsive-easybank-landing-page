import Footer from "./componenets/Footer";
import Menu from "./componenets/Menu";
import Section1 from "./componenets/Section1";
import Section2 from "./componenets/Section2";
import Section3 from "./componenets/Section3";


function App() {
  return (
    <div className="App max-w-7xl m-auto">
      <Menu />
      <Section1 />
      <Section2 />
      <Section3 />

      <Footer />
    </div>
  );
}

export default App;
