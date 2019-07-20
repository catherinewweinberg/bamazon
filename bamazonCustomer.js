var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table3");

var db = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "github",
  password: "github",
  database: "bamazon_db"
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
      head: [
        "Item ID",
        "Product Name",
        "Department Name",
        "Price",
        "Stock Quantity"
      ],
      colWidths: [10, 30, 30, 10, 20]
    });
    for (let i = 0; i < res.length; i++) {
      table.push([
        res[i].item_id,
        res[i].product_name,
        res[i].department_name,
        res[i].price,
        res[i].stock_quantity
      ]);
    }
    console.log(table.toString());
    buySomething();
  });

  function buySomething() {
    inquirer
      .prompt([
        {
          name: "item_id",
          type: "input",
          message: "Please enter in the Item ID you would like to purchase.",
          validate: function(value) {
            if (isNaN(value) === false) {
              return true;
            } else {
              return false;
            }
          }
        },
        {
          name: "quantity",
          type: "input",
          message: "How many would you like to buy?"
        }
      ])
      .then(function(input) {
        db.query(
          "SELECT * FROM products WHERE item_id = ?",
          input.item_id,
          function(err, res) {
            if (err) throw err;

            if (!res.length) {
              console.log(
                "Sorry, we do not have that item in our inventory.  Please try again."
              );
              return buySomething();
            }
            if (parseInt(input.quantity) > parseInt(res[0].stock_quantity)) {
              console.log("Insufficient quantity! Please try again.");
              buySomething();
            } else {
              var newQuantity =
                parseInt(res[0].stock_quantity) - parseInt(input.quantity);
              var subTotal = parseFloat(res[0].price) * input.quantity;

              db.query(
                "UPDATE products SET stock_quantity = ? WHERE item_id = ?",
                [newQuantity, input.item_id],
                function(err, res) {
                  if (err) throw err;

                  console.log(
                    `You paid $${subTotal} for ${
                      input.quantity
                    }.  Thank you for your purchase.`
                  );
                  db.end();
                }
              );
            }
          }
        );
      });
  }
}
