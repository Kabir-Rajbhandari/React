import "./App.css";
import Card from "./components/Card";
import CarDetail from "./components/Props";
import ParameterProps from "./components/Props";

// import ObjArrFill from "./components/Props";

function App() {
  let carInfo = {
    brand: "Toyota",
    model: "Supra",
    mfg: "2024-08-11",
  };

  const years = [1995, 2005, 2015, 2025];
  const carInfos = {
    brand: "Nissan",
    model: "Nissan-GTR",
    color: ["Black-Red combo", "Solid Black"],
    startingPrice: "$2415247",
  };

  const imgURl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXIGQeVZYdciAa_7w5VQI8MLOjGK4uszw2FwZkompTRw&s";
  return (
    <>
      <h1 className="bg-green-300 text-center rounded-xl p-3 text-black inline-block mb-4">
        Tailwind Test
      </h1>

      <br />

      {/* <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img
          class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src={imgURl}
          alt=""
          width="384"
          height="512"
        />
        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p class="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale on large
              teams. It’s easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </blockquote>
          <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
            <div class="text-slate-700 dark:text-slate-500">
              Staff Engineer, Algolia
            </div>
          </figcaption>
        </div>
      </figure> */}

      {/* React props are like function arguments in JavaScript and attributes in HTML. To send props into a component, use the same syntax as HTML attributes.  The component receives the argument as a props object. The name of the object is "props" but can call it anything.*/}

      <Card user="Random Img Generator [1]" btnText="Click me" />

      <Card user="Random Img Generator [2]" btnText="Visit me" />

      {/* multiple properties: */}
      <CarDetail brand="Nissan" model="V8-Twin Turbo" mfg="2026-10-11" />

      {/* passing object value */}
      <CarDetail
        brand={carInfo.brand}
        model={carInfo.model}
        mfg={carInfo.mfg}
      />

      {/* passing array and object value: */}
      {/* <ObjArrFill
        brand={carInfos.brand}
        model={carInfos.model}
        color={carInfos.color}
        price={carInfos.startingPrice}
        years={years}
      /> */}

      <ParameterProps
        userName="abcd"
        userAddress="Kathmandu Nepal"
        userDOB="2001-01-11"
        userGmail="johndoe@poe.ai"
        UId="120"
      />
    </>
  );
}

export default App;
