import LargeBtn from "./components/form/button/large/LargeBtn";
import MediumBtn from "./components/form/button/medium/MediumBtn";
import SmallBtn from "./components/form/button/small/SmallBtn";
import InputText from "./components/form/input/text/InputText";
import InputSelect from "./components/form/select/InputSelect";

function App() {
  return (
    <div className="App">
      <LargeBtn />
      <MediumBtn />
      <SmallBtn />
      <InputText />
      <InputSelect />
    </div>
  );
}

export default App;
