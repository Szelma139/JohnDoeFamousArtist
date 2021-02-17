import "./App.css";

import { Navbar } from "./Components/Navbar";
import { Story } from "./Components/Story";

import { MainForm } from "./Components/MultiStepForm/MainForm";
import { CustomButton } from "./Components/CustomButton";
import { TrackInfo } from "./Components/TrackInfo";
import { TextLineThrough } from "./Components/TextLineThrough";
import { LandingPage } from "./pages/LandingPage";

function App() {
  return (
    <div className="App">
      <Navbar />

      <LandingPage />
      {/* <TextLineThrough
        crossedText="Jolka"
        leftCrossPercentage="32"
        rightCrossPercentage="159"
      /> */}

    
    </div>
  );
}

export default App;
