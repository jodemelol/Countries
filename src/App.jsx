import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { CountriesDetails } from "./pages/CountriesDetails";
import { CountriesList } from "./pages/CountriesList";

export function App() {
  

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<CountriesList />} /> 
        <Route path="name/:nameId" element={<CountriesDetails />} />
      </Routes>
    </>
  );
}
