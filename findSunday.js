//Program to find the no of sundays between 2014 to 2050

let yearArray = ["2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025", "2026", "2027", "2028", "2029", "2030", "2031", "2032", "2033", "2034", "2035", "2036", "2037", "2038", "2039", "2040", "2041", "2042", "2043", "2044", "2045", "2046", "2047", "2048", "2049", "2050"];

// let d = new Date();

let counter = 0;

for (let i = 0; i < yearArray.length; i++) {
    let d = new Date(yearArray[i]);
    if (d.getDay() === 0) {
        counter += 1;
    }
}

console.log(`The number of years where Jan 1st is Sunday are: ${counter}`)