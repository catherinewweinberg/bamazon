var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table3");
var db = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Walker!0619",
  database: "bamazonDB"
});

// ===============================================

db.connect(function(err) {
  if (err) throw err;
  console.log("Connected as id: ", db.threadId);
  showItemForSale();
});

function showItemForSale() {
  db.query("SELECT * FROM products", function(err, res) {
    var table = new Table({
      head: ["Item ID", "Product Name", "Price", "Quantity"],
      colWidths: [10, 30, 10, 10]
    });
    for (let i = 0; i < res.length; i++) {
      table.push([
        res[i].item_id,
        res[i].product_name,
        res[i].price,
        res[i].quantity
      ]);
    }
    console.log(table.toString());
  });
}
