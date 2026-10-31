// => Conditional rendering

/* 
    => In React, there is no special syntax for writing conditions. Instead, can use the same techniques as when writing regular JavaScript code. i.e. 
*/

// function AdminPanel() {
//   const admin = {
//     userName: "Admin123",
//     password: "$12345667",
//   };

//   return (
//     <>
//       <h1>Hello {admin.userName}</h1>
//       <h2>Welcome to the admin dashboard..</h2>
//     </>
//   );
// }

// function LoginForm() {
//   return (
//     <>
//       <form action="" method="post">
//         <label htmlFor="">Whats your name: </label>
//         <input type="text" />
//         <br />
//         <button>Submit</button>
//       </form>
//     </>
//   );
// }

// let content;

// if (isLoggedIn) {
//   content = <AdminPanel />;
// } else {
//   content = <LoginForm />;
// }

// return { content };

// Rendering Lists:
// => rely on JavaScript features like for loop and the array map () function to render lists of components.

function ShoppingList() {
  const products = [
    { title: "Kiwi", id: 101 },
    { title: "Mango", id: 102 },
    { title: "Strawberry", id: 103 },
  ];
  const listItems = products.map((product) => {
    return (
      <li
        style={{
          color: "black",
        }}
        key={product.id}
      >
        {product.title}
      </li>
    );
  });

  return (
    <>
      <h1>WOrking or what ?</h1>
      <ul>{listItems}</ul>
    </>
  );
}

export default ShoppingList;
