function Sample() {
  // return <h3>This is a sample function..</h3>;
  return (
    // <> </> => Fragment which basically parks single component as kind of div but without the naming element, whereas inside the wrapper can return all the stuffs easily without error..
    <>
      <ul>
        <li>A</li>
        <li>B</li>
        <li>C</li>
      </ul>
      <form action="" method="post">
        <label htmlFor="">Text me: </label>
        <input type="text" />
        <br />
      </form>
    </>
  );
}

export default Sample;
