function customRender(reactElement, mainWrapper) {
  // => setAttribute() method adds a new attribute to an HTML element or updates its value if the attribute already eists.

  /*
  const domEl = document.createElement(reactElement.type);
  domEl.innerHTML = reactElement.children;
  domEl.setAttribute("href", reactElement.props.href);
  domEl.setAttribute("target", reactElement.props.target);
  mainWrapper.appendChild(domEl);

  */

  // => modular 2
  const domEL = document.createElement(reactElement.type);
  domEL.innerHTML = reactElement.children;

  for (const prop in reactElement.props) {
    if (prop === "children") continue;
    domEL.setAttribute(prop, reactElement.props[prop]);
  }

  mainWrapper.appendChild(domEL);
}

// type will be either (div, a, p, h1-h6, img) any Element
// convert by the bundler:
/*
function MyApp() {
  return (
    <>
      <h4>Return from MyApp..</h4>
    </>
  );
}
 */

// => In React the jsx component basically pharse in <reactElement> at the end of the day,

const reactElement = {
  // react does this work, behind the scene // --> custom React
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  children: "Click me to visit google..",
};

const mainWrapper = document.querySelector("#root");

customRender(reactElement, mainWrapper);
