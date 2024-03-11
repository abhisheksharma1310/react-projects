import "./App.css";
import Accordion from "./components/Accordian";
import CustomModal from "./components/CustomModal";
import CustomTabs from "./components/CustomTabs";
import ImageSlider from "./components/ImageSlider";
import LightDarkTheme from "./components/LightDarkMode";
import LoadMoreImage from "./components/LoadMoreImage";
import QrCodeGenerator from "./components/QrCodeGenerator";
import RandomColor from "./components/RandomColor";
import ScrollIndicator from "./components/ScrollIndicator";
import StarRating from "./components/StarRating";
import TreeView from "./components/TreeView";

function App() {
  return (
    <div className="App">
      {/* <Accordion />
      <RandomColor />
      <StarRating />
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
      <LoadMoreImage />
      <TreeView />
      <QrCodeGenerator />
      <LightDarkTheme />
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}
      {/* <CustomTabs /> */}
      <CustomModal />
    </div>
  );
}

export default App;
