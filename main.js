//TODO add imports if needed
//TODO doc
/**
 * The main function which calls the application. 
 * Generates random list of employees based on input.
 * @param {object} dtoIn contains count of employees, age limit of employees {min, max}
 * @returns {Array} of employees
 */
export function main(dtoIn) {

  const { count, age } = dtoIn;

  // 1. Příprava (data)
  const maleNames = [
    "Jan","Petr","Karel","Tomáš","Lukáš","Martin","Josef","David","Michal","Jakub",
    "Ondřej","Filip","Matěj","Dominik","Adam","Vojtěch","Radek","Marek","Aleš","Zdeněk",
    "Jaroslav","Stanislav","Václav","Roman","Jiří","Miroslav","Oldřich","Rostislav","Luboš","Ivo",
    "Bohumil","Vladimír","Patrik","Denis","Sebastián","Šimon","Tobiáš","Kristián","Erik","Alex",
    "Eduard","František","Hynek","Igor","Kryštof","Leoš","Norbert","Otakar","Radim","Vilém"
  ];

  const femaleNames = [
    "Anna","Marie","Eva","Jana","Lucie","Petra","Tereza","Veronika","Kateřina","Alena",
    "Barbora","Kristýna","Monika","Simona","Lenka","Ivana","Hana","Martina","Zuzana","Klára",
    "Eliška","Adéla","Nikola","Michaela","Karolína","Markéta","Dagmar","Božena","Blanka","Radka",
    "Soňa","Gabriela","Renata","Olga","Pavla","Dana","Sylvie","Věra","Jitka","Helena",
    "Ludmila","Anežka","Dominika","Emilie","Natálie","Laura","Nela","Vanesa","Patricie","Sára"
  ];

  const surnames = [
    "Novák","Svoboda","Novotný","Dvořák","Černý","Procházka","Kučera","Veselý","Horák","Němec",
    "Marek","Pokorný","Pospíšil","Hájek","Jelínek","Král","Růžička","Beneš","Fiala","Sedláček",
    "Doležal","Zeman","Kolář","Navrátil","Čech","Urban","Blažek","Kříž","Jaroš","Tichý",
    "Vondrák","Vlček","Kadlec","Mach","Šimek","Holub","Staněk","Polák","Beran","Kopecký",
    "Malý","Suchý","Zajíček","Valenta","Šťastný","Konečný","Kovář","Kratochvíl","Hruška","Dušek"
  ];

  const workloads = [10, 20, 30, 40];

  const dtoOut = [];

  // pomocné funkce
  function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function generateBirthdate(minAge, maxAge) {
    const randomAge = getRandomInt(minAge, maxAge);
    const currentYear = new Date().getFullYear();
    const year = currentYear - randomAge;

    const month = getRandomInt(0, 11);
    const day = getRandomInt(1, 28);

    return new Date(Date.UTC(year, month, day)).toISOString();
  }

  // 2. Iteration
  for (let i = 0; i < count; i++) {

    // Selection (ternary)
    const gender = Math.random() < 0.5 ? "male" : "female";

    // Selection (if / else)
    let name;
    if (gender === "male") {
      name = getRandomItem(maleNames);
    } else {
      name = getRandomItem(femaleNames);
    }

    // příjmení
    let surname = getRandomItem(surnames);

    // Selection (if)
    if (gender === "female" && !surname.endsWith("á")) {
      surname += "ová";
    }

    // datum narození
    const birthdate = generateBirthdate(age.min, age.max);

    // úvazek
    const workload = getRandomItem(workloads);

    dtoOut.push({
      gender,
      birthdate,
      name,
      surname,
      workload
    });
  }

  // 3. návrat výsledku (DŮLEŽITÉ PRO TESTY)
  return dtoOut;
}
