import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { getCountryDetails } from "../services/countries";

export function CountriesDetails() {
  const [country, setCountry] = useState([]);

  const { nameId } = useParams();
  const bgBoxes = useColorModeValue("white", "elementDark");

  useEffect(() => {
    getCountryDetails(nameId).then(setCountry);
  }, [nameId]);

  return (
    <>
      <Container maxW="container.xl">
        <Link to="/">
          <Button
            leftIcon={<ArrowBackIcon />}
            my="50px"
            w="100px"
            borderRadius={4}
            boxShadow="0px 0px 2px 2px rgba(0,0,0,0.1)"
            bg={bgBoxes}
          >
            Back
          </Button>
        </Link>
        {country.map((info) => (
          <Stack
            direction={{ base: "column", xl: "row" }}
            key={info.name?.common}
          >
            <Image
              src={info.flags?.png}
              alt={info.name?.common}
              w="500px"
              h="300px"
            />
            <Box pl={{ base: 0, xl: "100px" }} py="20px">
              <Text fontSize="30px" fontWeight="bold" pb="10px">
                {info.name?.common}
              </Text>
              <Stack
                direction={{ base: "column", xl: "row" }}
                spacing={{ base: 10, xl: 40 }}
              >
                <Stack spacing={2}>
                  <Text>
                    Native Name:{" "}
                    {
                      info.name?.nativeName[
                        Object.keys(info.name?.nativeName)[0]
                      ].common
                    }
                  </Text>
                  <Text>Population: {info.population}</Text>
                  <Text>Region: {info.region}</Text>
                  <Text>Sub Region: {info.subregion}</Text>
                  <Text>Capital: {info.capital?.[0]}</Text>
                </Stack>
                <Stack spacing={2}>
                  <Text>Top Level Domain: {info.tld}</Text>
                  <Text>
                    Currencies:{" "}
                    {info.currencies[Object.keys(info.currencies)[0]].name}
                  </Text>
                  <Text>
                    Languages: {Object.values(info.languages).join(", ")}
                  </Text>
                </Stack>
              </Stack>
              <Stack direction={{ xl: "row" }} pt="50px">
                <Text>Border Countries: </Text>
                {info.borders !== undefined ? (
                  info.borders.map((border, index) => (
                    <Box
                      key={index}
                      bg={bgBoxes}
                      px={4}
                      borderRadius={2}
                      boxShadow="0px 0px 2px 2px rgba(0,0,0,0.1)"
                    >
                      {Object.values(border)}
                    </Box>
                  ))
                ) : (
                  <Text>None</Text>
                )}
              </Stack>
            </Box>
          </Stack>
        ))}
      </Container>
    </>
  );
}
