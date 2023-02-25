import React from "react";
import Person from "./Person";

function NameList() {
    const names = ['Heivans', ' Yuddy', 'Monyo', 'Ezzy']
  const persons = [
    {
      id: 1,
      name: " Heivans",
      age: 23,
      skill: " software Engineer",
    },
    {
      id: 2,
      name: " Monyo",
      age: 20,
      skill: " Designer",
    },
    {
      id: 3,
      name: " Yuddy",
      age: 22,
      skill: "Engineer",
    },
    {
      id: 4,
      name: " Ezzy",
      age: 26,
      skill: "Mbunge",
    },
  ];
//   const personList = persons.map((person) => <Person key={person.id} person={person} />);
  const nameList = names.map((name, index) => <h2 key={index}> {index} {name}</h2>)
  return <div>{nameList}</div>;
}

export default NameList;
