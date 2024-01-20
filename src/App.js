import './App.css';
import Table from './component/Table'
import data from "./data/Wine-Data.json";
import {calculateClassWiseStatistics, addGammaProperty} from "./lib/utility";

function App() {
  const flavanoidsData = calculateClassWiseStatistics(data,"Flavanoids", "Alcohol");
  let addGamma = data.map(addGammaProperty);
  const gammaData = calculateClassWiseStatistics(addGamma,"Gamma", "Alcohol");

  return (
    <>
    <h3>Flavanoids Analytics</h3>
    <Table data={flavanoidsData}></Table>
    <br></br>
    <h3>Gamma Analytics</h3>
    <pre>Gamma = (Ash * Hue) / Magnesium</pre>
    {/* Same Table component can be used to show the table here proprtyName will appear after each statistical parameter mean median or mode */}
    <Table data={gammaData} propertyName={"Gamma"}></Table>
    </>
  );
}

export default App;
