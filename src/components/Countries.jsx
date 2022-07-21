import { Link } from "react-router-dom";
import { Box, Image, Stack, Text } from "@chakra-ui/react";

export function Countries({ country, bgDark }) {
  return (
    <>
      <Stack align="center">
        <Link to={`/name/${country.name?.common}`}>
          <Box bg={bgDark} borderBottomRadius={10} w="250px" h="300px">
            <Image
              src={country?.flags?.png}
              borderTopRadius={10}
              w="250px"
              h="150px"
            />
            <Text py={4} px={6} fontWeight="bold" fontSize="16px">
              {country?.name?.common}
            </Text>
            <Box px={6}>
              <Stack direction="row">
                <Text fontWeight="semibold">Population:</Text>
                <Text>{country?.population}</Text>
              </Stack>
              <Stack direction="row">
                <Text fontWeight="semibold">Region:</Text>
                <Text>{country?.region}</Text>
              </Stack>
              <Stack direction="row">
                <Text fontWeight="semibold">Capital:</Text>
                <Text>{country?.capital}</Text>
              </Stack>
            </Box>
          </Box>
        </Link>
      </Stack>
    </>
  );
}
