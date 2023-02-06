import { Toaster } from "react-hot-toast";
import Heading from "./components/Heading";
import List from "./components/List";
import { MainContainer } from "./components/Main";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <>
      <Toaster position='bottom-center' reverseOrder={false} />
      <Heading />
      <MainContainer fluid>
        <List />
      </MainContainer>
    </>
  );
}
