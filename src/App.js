import React from "react";
import Header from "./components/header";
import Headline from "./components/headline";

import "./App.scss";

const tempArray = [
  {
    fName: "Ian",
    lName: "M",
    email: "ianM@gmail.com",
    age: 29,
    online: true
  }
];

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline
          header="Posts"
          desc="Click the button to show the posts"
          tempArray={tempArray}
        />
      </section>
    </div>
  );
}

export default App;
