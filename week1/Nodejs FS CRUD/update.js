fs.readFile("./employees.json", (err, data) => {
  if (err) console.log(err);
  var dtr = { name: "Employee 1 Name ", salary: 4000 };
  var myData = JSON.stringify(dtr);
  fs.writeFile("./employees.json", myData, (err) => {
    if (err) throw err;
    console.log("Updated success " + myData);
  });
});
