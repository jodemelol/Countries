import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SearchIcon } from "@chakra-ui/icons";
import { getAllCountries } from "../services/countries";
import { Countries } from "../components/Countries.jsx";
import {
  Box,
  Container,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  SimpleGrid,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";

export function CountriesList() {

  const [countries, setCountries] = useState([]);
  const [haber, setHaber] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const bgLight = useColorModeValue("lightBg", "dark");
  const bgDark = useColorModeValue("white", "elementDark");
  const filter = searchParams.get("filter") ?? "";

  const handleFilter = (e) => {
    setSearchParams({ filter: e.target.value });
    filterCountry(e.target.value);
  };

  const filterCountry = (country) => {
    let resultSearch = haber.filter((element) => {
      if (element?.name?.common.toLowerCase().includes(country.toLowerCase())) {
        return element;
      }
    });
    setCountries(resultSearch);
  };

  const handleRegion = async (region) => {
    if (region === "") return;
    const res = await fetch(`https://restcountries.com/v3.1/region/${region}`);
    const data = await res.json();
    await setCountries(data);
  };

  useEffect(() => {
    getAllCountries().then((data) => {
      setCountries(data);
      setHaber(data);
    });
  }, []);

  return (
    <>
      <Box bg={bgLight}>
        <Container maxW="container.xl">
          <Stack
            direction={{ base: "column", xl: "row" }}
            justify="space-between"
            py={8}
          >
            {console.log()}
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon color="gray.300" />}
              />
              <Input
                w="350px"
                placeholder="Search for a country..."
                bg={bgDark}
                value={filter}
                onChange={handleFilter}
              ></Input>
            </InputGroup>
            <Select
              bg={bgDark}
              w="200px"
              pt={{ base: "20px", xl: 0 }}
              onChange={(e) => handleRegion(e.target.value)}
            >
              <option value="">Filter by Region</option>
              <option value="africa">Africa</option>
              <option value="america">America</option>
              <option value="asia">Asia</option>
              <option value="europe">Europe</option>
              <option value="oceania">Oceania</option>
            </Select>
          </Stack>
          <SimpleGrid
            columns={[1, 2, 2, 4]}
            spacingX={24}
            spacingY={{ base: 10, xl: 20 }}
            py={4}
          >
            {countries.map((country) => (
              <Countries key={uuidv4()} country={country} bgDark={bgDark} />
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
}
