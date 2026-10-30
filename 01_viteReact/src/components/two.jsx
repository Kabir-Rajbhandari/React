// Writing markup with JSX

/* 
    => The markup syntax that includes the JS and the HTML is called JSX. It's optional, but most React projects use JSX for its convenience. JSX is stricter than HTML. Have to close tags like <br/>. Component also can't return multiple JSX tags. Need to wrap them into a shared parent like a <div> </div> or an empty <> </> wrapper [fragment]
*/

function AboutPage() {
  const imgStyle = {
    height: "400px",
    width: "350px",
    objectFit: "contain",
  };

  const user = {
    userName: "John The Don",
    age: 35,
    isEmployee: false,
    profile:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzpffu1FvwF9Hc5K5mGX15aqNDxOAMK75Hgam_zu0sRA&s=10",
    imgSize: 150,
  };

  return (
    <>
      <h2>About</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
        excepturi nisi facilis. Consequatur pariatur asperiores nulla. Nisi
        incidunt perspiciatis earum labore ab eius sapiente voluptate, saepe
        fugiat a maiores totam?
      </p>
      {/* Adding Styles: In React, can specify a CSS class with className. It works the same way as the HTML class attribute. */}
      <img
        className="userProfile"
        style={imgStyle}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRBN_aN4vwG8SjYEMiqqNfjnGKbz8vns0Kh2D1Zidsug&s=10"
      />
      <hr />
      <h4>{user.userName}</h4>
      <h4>{user.age}</h4>
      <h4>{user.isEmployee + " "}</h4>
      <img
        className="JohnProfile"
        src={user.profile}
        style={{
          height: user.imgSize,
          width: user.imgSize,
        }}
        alt={"Photo of" + user.userName}
      />
    </>

    // style={{}} is not a special syntax, but a regular {} object inside the style = { } JSX curly braces. use the style attribute when styles depend on JS variables.
  );
}

export default AboutPage;
