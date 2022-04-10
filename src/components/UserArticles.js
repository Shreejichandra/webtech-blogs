import React from "react";
import ReactDOM from "react-dom";
import SplitterLayout from "react-splitter-layout";
import "react-splitter-layout/lib/index.css";
import Feed from "./Feed";
import "react-splitter-layout/lib/index.css";
import "./styles.css";

// export default class UserArticles extends React.Component {
//   render() {
//     return (
//       //   <SplitterLayout onDragStart={this.onDragStart} onDragEnd={this.onDragEnd}>
//       <SplitterLayout>
//         <div className="my-pane">
//           <Feed />
//         </div>
//         <div className="myy-pane">
//           <img alt="Emy Sharp" src="logo192.png" />
//           <h2>Shrimp and Chorizo Paella</h2>
//         </div>
//       </SplitterLayout>
//     );
//   }
// }
export default function UserArticles() {
  return (
    <div>
      <div class="split left" overflow="scroll">
        <img alt="Emy Sharp" src="logo192.png" />
        <h2>Shrimp and Chorizo Paella</h2>{" "}
      </div>

      <div class="split right">
        <Feed />
      </div>
    </div>
  );
}
