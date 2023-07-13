import { Fragment } from "react";
import IterationComponent from "./component/IterationComponent";
import IterationComponent2 from "./component/IterationComponent2";
import IterationComponentQ from "./component/IterationComponentQ";
import IterationComponentQ2 from "./component/IterationComponentQ2";

function App() {
  return (
    <Fragment>
      <IterationComponent />

      <br />
      <hr />
      <br />

      <IterationComponent2 />

      <br />
      <hr />
      <br />

      <IterationComponentQ />
      <IterationComponentQ2 />

      <br />
      <hr />
      <br />
    </Fragment>
  );
}

export default App;
