// const employees: Employee[] = [
//     {
//         firstName: "Wojciech",
//         lastName: "Jurgielewicz",
//         age: 21,
//         position: "Developer",
//         programmingLanguage: ["C++", "JS", "Java"]
//     },
//     {
//         firstName: "Anna",
//         lastName: "Jasielec",
//         age: 21,
//         position: "Designer",
//         programmingLanguage: ["C++", "PHP", "Go"]
//     },
//     {
//         firstName: "Dariusz",
//         lastName: "Homa",
//         age: 70,
//         position: "Manager",
//         programmingLanguage: ["Python", "C++", "Go", "Java"]
//     },
//     {
//         firstName: "Jakub",
//         lastName: "Latawiec",
//         age: 22,
//         position: "Developer",
//         programmingLanguage: ["Swift", "JS"]
//     }
// ]
//
// const tab1: number[] = [1, 2, 3, 4];
// const tab2 = tab1.map(e => Math.pow(e, 3));
//
// const getDevelopers = (employees: Employee[]) => {
//     return employees.filter(e => e.position === "Developer");
// }
//
// const findEmployee = (employees: Employee[], name: string) => {
//     return employees.find(e => e.firstName.includes(name) || e.lastName.includes(name));
// }
//
// function addExperience(employee: Employee, lang: string) {
//     employee.programmingLanguage.push(lang);
// }
//
// function addExperiences(employees: Employee[], lang: string) {
//     return employees.map(e => e.programmingLanguage.push(lang));
// }
//
//
// console.log("Employees: ", employees);
// const developers: Employee[] = getDevelopers(employees);
// const jakub: Employee | undefined = findEmployee(employees, "Jakub");
//
// if (jakub) addExperience(jakub, "C++")
//
//
// addExperiences(employees, "C--");
// console.log("Employees: ", employees);
// console.log(tab2.join(" "));
// const x = 1;