import "./index.css";

const rootElement = () => {
  const element = document.createElement("div");
  element.id = "root";

  return element;
};

export default rootElement;

document.body.appendChild(rootElement());

// if (module.hot) {
//     module.hot.accept({}, () => {

//     });
// }
