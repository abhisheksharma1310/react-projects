import "./App.css";
import Accordion from "./components/accordian";
import ImageSlider from "./components/image-slider";
import LoadMoreImage from "./components/load-more-image";
import RandomColor from "./components/random-color";
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
      <TreeView />
    </div>
  );
}

export default App;
