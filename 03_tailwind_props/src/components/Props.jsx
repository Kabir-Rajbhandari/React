// props [single parameter ]
function CarBrand(props) {
  return (
    <>
      <h1>I'm a {props.brand} !</h1>
    </>
  );
}

// export default CarBrand;

// props [multiple parameter]

function CarDetail(props) {
  return (
    // All properties are received in the CarDetail component inside the props object.
    <>
      <h3 className="mt-2 mb-1">
        {/* Use the property values in the CarDetail component */}
        Hi, I'm from {props.brand} with model of {props.model} and the
        manufacture date was {props.mfg}
      </h3>
    </>
  );
}

// export default CarDetail;

function ObjArrFill(props) {
  // receives object [4]
  //   console.log("props: " + props);

  return (
    <>
      <h3>
        The car brand we have is {props.brand} whereas the model is{" "}
        {props.model}, in which the available color are {props.color}, the
        starting price of the car is about {props.price}, as the car
        manufactured in between the range of {props.years}
      </h3>
    </>
  );
}

// export default ObjArrFill;

function ParameterProps({
  userName = "Random Me",
  userAddress,
  userDOB,
  userGmail,
  UId,
}) {
  return (
    <>
      <p className="p-2">
        {/* default value set for the userName if the userNameValue is not passed in the parameters.. */}
        {/* for readability wise don't include the or statement*/}
        {/* Hello {userName || "JOHNNY JOHNNY"}, your UID is {UId}. You live in{" "}
        {userAddress}, your birth date was {userDOB}, and gmail is {userGmail} */}
        Hello {userName}, your UID is {UId}. You live in {userAddress}, your
        birth date was {userDOB}, and gmail is {userGmail}
      </p>
    </>
  );
}

export default ParameterProps;
