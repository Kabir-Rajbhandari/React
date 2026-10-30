/*
=> Creating and nesting components: React apps are made out of components. A component is a pieve of the UI that has its own logic and appearance. A component can be as small as button, or as large as an entire page. React components are JavaScript funvtions that return markup:
*/

function MyButton() {
  return (
    <>
      <button>I'm a button</button>
    </>
  );
}

export default function MainApp() {
  return (
    <>
      <h1>Welcome to my app</h1>
      <MyButton />
    </>
  );
}
// => <MyButton/> starts with a capital letter. That's the way to know it's React component. React Component names must always start with a capital letter, while HTML tags must be to lowercase.

// => The export default keywords specify the main component in the file.
