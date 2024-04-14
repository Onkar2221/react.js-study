import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";

function App() {
  return (
    <>
      {/* <Navbar title="ORK" about="About Us"></Navbar> */}

      <Navbar title="ORK" home="Home" btn="Search"></Navbar>
      <div className="container my-3">
        <TextForm heading="Enter the text here:" />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;

// { also  write <navbar/> }
// when we are pass props then variable i.e.(title) name is equal to where to pass this name. [props.title]
// When we declare propTypes.String and pass  Number
//  i.e. -- (Error inside console) "title={3}"-- Invalid prop `title` of type `number` supplied to `Navbar`, expected `string`.
// When we are not pass props used "Default Props"
