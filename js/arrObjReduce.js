"use strict";
console.log("arrObjReduce.js");

const users = [
  {
    name: "James",
    age: 65,
    gender: "male",
    town: "London",
  },
  {
    name: "Jane",
    age: 27,
    gender: "female",
    town: "Kaunas",
  },
  {
    name: "Mike",
    age: 35,
    gender: "male",
    town: "Kaunas",
  },
  {
    name: "June",
    age: 47,
    gender: "female",
    town: "London",
  },
];

//gauti visu useriu amziu vidurki

// const usersAvg =
//   users.reduce((avg, uObj) => {
//     avg + uObj.age;
//   }, 0) / users.length;

// // const ages =
// //   users.map((uObj) => uObj.age).reduce((avg, sk) => avg + sk, 0) / users.length;

// const ages =
//   users.map(({ age }) => age).reduce((avg, sk) => avg + sk, 0) / users.length;

const avgNameLength =
  users.map((uObj) => uObj.name.length).reduce((avg, sk) => avg + sk, 0) /
  users.length;

console.log("avgNameLength ===", avgNameLength);

const minAge = users
  .map((uObj) => uObj.age)
  .reduce((min, sk) => {
    return Math.min(min, sk);
  });

console.log("minAge ===", minAge);

const rez = {
  London: 2,
  Kaunas: 3,
};

const townsObj = {};

// grazinti kiek mes turim nariu is Londono. Grazinti objekto pavidalu

const londonUsersObj = users.reduce(
  (accObj, uObj) => {
    //atliekam veiksmus su objektu ir ji grazinam
    if (uObj.town === "London") {
      accObj.London++;
    }
    //grazinam objekta, o ne kazkoki veiksma
    return accObj;
  },
  { London: 0 }
);
console.log("londonUsersObj ===", londonUsersObj);

////////////////////// Rasti vardu ilgiu vidurki ///////////////////////

const userNameLengthAvg = users.reduce((avg, uObj) => {
  const currentUsersLength = uObj.name.length;
  const currenUsersAvgPart = currentUsersLength / users.length;
  return avg + currenUsersAvgPart;
}, 0);

console.log("userNameLengthAvg ===", userNameLengthAvg);

///////////////////// Rasti jauniausia useri //////////////////////////
const youngest = users.reduce((foundYoungest, uObj) => {
  if (uObj.age < foundYoungest.age) {
    foundYoungest = uObj;
  }
  return foundYoungest;
  //Math.min(foundYoungest, uObj.age);
}, users[0]);

console.log("youngest ===", youngest);

//////////////////////// STUDENTS ////////////////////////////////////////

const students = [
  {
    name: "James",
    gender: "male",
    age: 25,
    town: "Vilnius",
    hasCar: true,
  },
  {
    name: "Jill",
    gender: "female",
    age: 28,
    town: "Kaunas",
    hasCar: true,
  },
  {
    name: "Mike",
    gender: "male",
    age: 18,
    town: "Kaunas",
    hasCar: false,
  },
  {
    name: "Jane",
    gender: "female",
    age: 22,
    town: "Klaipeda",
    hasCar: false,
  },
  {
    name: "Jannet",
    gender: "female",
    age: 29,
    town: "Klaipeda",
    hasCar: true,
  },
  {
    name: "Cory",
    gender: "male",
    age: 30,
    town: "Siauliai",
    hasCar: true,
  },
  {
    name: "Minks",
    gender: "male",
    age: 19,
    town: "Siauliai",
    hasCar: false,
  },
];

// 1 uzdavinys
const studentsHasCar = students.filter((student) => {
  return student.hasCar === true;
});

console.log("studentsHasCar ===", studentsHasCar);

// 2 uzdavinys

const studentsHasCar2 = [];
students.forEach((student) => {
  if (student.hasCar === true) {
    studentsHasCar2.push(student);
  }
});
console.log("studentsHasCar2 ===", studentsHasCar2);

// 3 uzdavinys

const fromVilnius = students.filter((student) => {
  return student.town === "Vilnius";
});

console.log("fromVilnius ===", fromVilnius);

// 4 uzdavinys

const ladies = students.filter((student) => {
  return student.gender === "female";
});

console.log("ladies ===", ladies);

// 5 uzdavinys

const fromKaunas = students.filter((student) => {
  return student.town === "Kaunas";
});
let rez1 = fromKaunas.length > 0 ? "Yra is Kauno" : "Nera is Kauno";

console.log("fromKaunas ===", rez1);

// 6 uzdavinys

const youngerThan26 = [];
students.forEach((student) => {
  if (student.age < 26) {
    youngerThan26.push(student);
  }
});
console.log("youngerThan26 ===", youngerThan26.length);

// 7 uzdavinys

const menAgeAvg = [];
students.forEach((student) => {
  if (student.gender === "male") {
    menAgeAvg.push(student);
  }
});
console.log("menAgeAvg ===", menAgeAvg);

const totalMale = menAgeAvg.length;
const maleAgeAvg = menAgeAvg.reduce((avg, studentObj) => {
  return avg + studentObj.age / totalMale;
}, 0);

console.log("maleAgeAvg ===", maleAgeAvg);

// 8 uzdavinys

{
  const menAgeAvg = [];
  students.forEach((student) => {
    if (student.hasCar === true) {
      menAgeAvg.push(student);
    }
  });
  console.log("menAgeAvg ===", menAgeAvg);

  const totalMale = menAgeAvg.length;
  const maleAgeAvg = menAgeAvg.reduce((avg, studentObj) => {
    return avg + studentObj.age / totalMale;
  }, 0);

  console.log("maleAgeAvg ===", maleAgeAvg);
}

// Grazinti nauja masyva kurio objektuose butu tik vardas ir miestas

const studentsNamesTowns = students.map((student) => {
  return { Vardas: student.name, Miestas: student.town };
});

console.log("studentsNamesTowns ===", studentsNamesTowns);

//sugeneruoti rikiuoto saraso pavidalu htmle visu zmoniu vardus ir kiek jiems metu

const studentsNamesAges = students.map((student) => {
  return { Vardas: student.name, Amzius: student.age };
});
const olEl = document.createElement("ol");
document.body.append(olEl);
studentsNamesAges.forEach((student) => {
  olEl.innerHTML += `<li>${student.Vardas} - ${student.Amzius}</li>`;
});

///////////////////////////

let gendersObjInit = {
  male: [],
  female: [],
};

const gendersObj = users.reduce((accObj, uObj) => {
  if (uObj.gender === "female") {
    accObj.female.push(uObj);
  } else {
    accObj.male.push(uObj);
  }
  return accObj;
}, gendersObjInit);

console.log("gendersObj ===", gendersObj);

/////////////////////////////////

const usersByTown = users.reduce((accObj, uObj) => {
  // jei toks key (miestas) jau pridetas prie accObj, tada didinam kieki, o jei ne - prideti toki key
  if (accObj[uObj.town]) {
    accObj[uObj.town]++;
  } else {
    accObj[uObj.town] = 1;
  }

  return accObj;
}, {});

console.log("usersByTown ===", usersByTown);

////////////////////

//Gauti visu zmoniu metu suma .reduce

const ageSum = students.reduce((sum, uObj) => {
  console.log("uObj.age ===", uObj.age);
  return sum + uObj.age;
}, 0);

console.log("ageSum ===", ageSum);

//suskaiciuoti visu zmoniu metu vidurki

const ageAvg = ageSum / students.length;
console.log("ageAvg ===", ageAvg);

//surasti zmongu vardu 'Mike' ir padaryti kad jis nusipirko masina yra tiesa

students.forEach((student) => {
  if (student.name === "Mike") {
    student.hasCar = true;
  }
});
console.log("students ===", students);

//////

const studentsNamesAges2 = students.map((student) => {
  return { Vardas: student.name, Amzius: student.age };
});
studentsNamesAges2.forEach((student) => {
  const pEl = document.createElement("p");
  document.body.innerHTML = `${student.Vardas} - ${student.Amzius}`;
  document.body.append(pEl);
});
