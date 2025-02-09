const parent = React.createElement("div",{id:"child"},[React.createElement("h1",{},"I'm an h1 tag"),React.createElement("h2",{},"I'm an h2 tag")]);
console.log(parent);
// const heading = React.createElement(
//     "h1",
//      {id: "heading", xyz:"abc"},
//     "Hello world from react!"
//   );
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(parent);