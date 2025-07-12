import { useState } from "react";
import Navbar from "./Components/Navbar";
import NewsBoard from "./Components/NewsBoard";

function App() {
  const [category, setcategory] = useState("general");
  return (
    <>
      <Navbar category={category} setcategory={setcategory} />
      <NewsBoard category={category}  />
    </>
  );
}

export default App;
