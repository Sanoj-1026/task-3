const apiUrl = "https://restcountries.com/v3.1/all";

fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {

    data.forEach((country) => {
      const name = country.name.common;
      const region = country.region;
      const subregion = country.subregion;
      const population = country.population;

      console.log(`Country: ${name}`);
      console.log(`Region: ${region}`);
      console.log(`Sub-Region: ${subregion}`);
      console.log(`Population: ${population}`);
      console.log("\n");
    });
  })
  .catch((error) => {
    console.error("There was a problem fetching the data:", error);
  });