import LargeBtn from "./components/form/button/large/LargeBtn";
import MediumBtn from "./components/form/button/medium/MediumBtn";
import SmallBtn from "./components/form/button/small/SmallBtn";
import InputText from "./components/form/input/text/InputText";
import InputSelect from "./components/form/select/InputSelect";
import InputTextArea from "./components/form/textarea/InputTextArea";
import InputRadio from "./components/form/input/radio/InputRadio";
import InputCheckbox from "./components/form/input/checkbox/InputCheckbox";
import CoinUploader from "./components/form/input/file/coinlogo/CoinUploader";
import ExchangeUploader from "./components/form/input/file/exchangeicon/ExchangeUploader";
import BannerUploader from "./components/form/input/file/banner/BannerUploader";
import DataTables from "./components/tables/datatables/DataTables";

function App() {
  return (
    <div className="App">
      <LargeBtn />
      <MediumBtn />
      <SmallBtn />
      <InputText />
      <InputSelect />
      <InputTextArea />
      <InputRadio />
      <InputCheckbox />
      <CoinUploader />
      <ExchangeUploader />
      <BannerUploader />
      <DataTables />
    </div>
  );
}

export default App;
