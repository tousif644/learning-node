const obj = {
  name: "Tousif Tasrik",
  roll: "548",
  address: "Sarkarpara,Gaibandha",
  college: "Dr. Maleka College",
};

const fs = require("fs");
fs.writeFileSync("hello.txt",JSON.stringify(obj));
