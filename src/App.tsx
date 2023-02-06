import { Toaster } from "react-hot-toast";
import {Footer} from "./components/Footer";
import Heading from "./components/Heading";
import List from "./components/List";
import { MainContainer } from "./components/Main";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <>
      <Toaster position='top-right' reverseOrder={false} />
      <Heading />
      <MainContainer fluid>
        <List />
      </MainContainer>
      <Footer />
    </>
  );
}
