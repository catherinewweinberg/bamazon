# Welcome to Bamazon

Bamazon is an Amazon-like store front can take orders from customers, deplete stock inventory, and provide the customer total. The app will be run using node.js through your terminal.

Technology Used:

- Node.js
- MySQL
- cli-table3
- Inquirer

## Steps to run Bamazon:

**Within your terminal you will need to run the command "node bamazonCustomer.js". This command will bring up the store front and prompt you to enter in the Item ID that you would like to buy.**

- ![node-bamazonCustomer](/assets/images/nodebamazonCustomerjs.png)
  <br>
  <br>

**Once you have entered in the item you would like to buy you will then be prompted to enter in the quantity.**

- ![quantity](/assets/images/quantity.png)
  <br>
  <br>

**Once the quantity has been entered the prompt will state the total you paid and the message "Thank you for your purchase."**

- ![total](/assets/images/youpaid.png)
  <br>
  <br>

**When your order has been completed you will then enter in "node bamazonCustomer.js" and will see that the item you have purchased has been removed from the stock quantity.**

- ![updatedstock](/assets/images/updatedstock.png)
  <br>
  <br>

**If an Item Id is entered that doesnt exist in the database you will receive the following error: "Sorry, we do not have that item in our inventory. Please try again."**

- ![itemid](/assets/images/itemid.png)
  <br>
  <br>

**If an insufficient stock quantity amount is entered you will receive the error message: "Insufficient quantity! Please try again."**

- ![insufficient](/assets/images/insufficient.png)
