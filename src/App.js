import "./App.css";
import Accordion from "./components/accordian";
import ImageSlider from "./components/image-slider";
import LightDarkTheme from "./components/light-dark-mode";
import LoadMoreImage from "./components/load-more-image";
import QrCodeGenerator from "./components/qr-code-generator";
import RandomColor from "./components/random-color";
import ScrollIndicator from "./components/scroll-indicator";
import StarRating from "./components/star-rating";
import TreeView from "./components/tree-view";

function App() {
  return (
    <div className="App">
      {/* <Accordion/> */}
      {/* <RandomColor /> */}
      {/* <StarRating/> */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}
      {/* <LoadMoreImage/> */}
      {/* <TreeView /> */}
      {/* <QrCodeGenerator /> */}
      {/* <LightDarkTheme /> */}
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
    </div>
  );
}

export default App;
