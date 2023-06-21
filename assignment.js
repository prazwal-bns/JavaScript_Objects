const myCV = {
  name: {
    firstName: "Prajwal",
    lastName: "Banstola",
    fatherName: "Balram Banstola",
  },
  education: {
    SEE: {
      school: "Prativa Secondary School",
      totalMarks: "86%",
    },
    College: {
      bachelor: "Informatics College Pokhara",
      semester: "5th sem",
    },
  },
  workExperience: "Not Yet Working",
  address: {
    state: "Gandaki",
    city: "Pokhara",
    postalCode: 3306,
  },
  skills: [
    {
      skill: "ReactJS",
      teacher: "Bipin Karki",
      profiency: "Begineer",
    },
    {
      skill: "NodeJS",
      teacher: "Ram Karki",
      profiency: "Advance",
    },
    {
      skill: "JAVA",
      teacher: "Hari Sharma",
      profiency: "Novice",
    },
  ],
  languages: {
    English: "Proficient",
    Nepali: "Fluent",
    Hindi: "Novice",
  },
  subjects: {
    ICP: {
      CHASA: {
        code: 1568,
        supervisor: "Amar Khanal",
      },
      WRL: {
        code: 21568,
        supervisor: "Sandip Gurung",
      },
    },
    SOCH: {
      Database: {
        code: 24568,
        supervisor: "Hari Khanal",
      },
      JAVA: {
        code: 5789,
        supervisor: "Ram Kunwar",
      },
    },
  },
};

// obj.education.SEE
// obj.languages --> with profiency
// obj.skills[0].teacher --> name = bipin
// obj.subjects.icp.wrl.supervisor --> sandip grg

console.log(myCV.education.SEE);
console.log(myCV.languages);
console.log(myCV.skills[0].teacher);
console.log(myCV.subjects.ICP.WRL.supervisor);
