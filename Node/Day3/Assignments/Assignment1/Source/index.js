// Rambo Rental Bikes is looking for developing a system to calculate the rentals of the bikes.

// System should accept the customer details, bike details and calculate the rental charges.

// System allows users to add customer details with bike rented.

// It computes rent for each customer.

// Systems displays the Bike details with summation of days of hire and rental payment.

// FUNCTIONALITY AND TASK 

// Define a class called Mobike with the following 

// description: Instance variables / data 

// members: BikeNumber – to store the bike’s number 

// PhoneNumber – to store the phone number of the customer 

// Name – to store the name of the customer 

// Days – to store the number of days the bike is taken on rent o 

// charge – to calculate and store the rental charge Member 

// methods: void Compute() – to compute the rental charge Bike No.PhoneNo No.of days Charge The rent for a mobike is charged on the following 

// basis: First five days Rs 500 per day Next five days Rs 400 per day Rest of the days Rs 200 per day Note use get this Data @param ES6 class Exports BikeNo,
// Phone, Noofdays and Charge.

var readline = require('readline');
var que;
var arrayList = [
  {
    BikeNumber: 'GJ35B0115',
    PhoneNumbar: 9786453210,
    Name: 'Tina',
    Days: 5,
  },
  {
    BikeNumber: 'GJ20YA5659',
    PhoneNumbar: 8795463201,
    Name: 'Meena',
    Days: 6,
  },
  {
    BikeNumber: 'GJ20B8448',
    PhoneNumbar: 6353601526,
    Name: 'Raj',
    Days: 10,
  },
  {
    BikeNumber: 'GJ06AK8486',
    PhoneNumbar: 6325874109,
    Name: 'Rahul',
    Days: 12,
  },
];

class Mobike {
  customer_name;

  addCustomer(BikeNo, PhoneNo, CustomerName, day) {
    arrayList.push({
      BikeNumber: BikeNo,
      PhoneNumbar: PhoneNo,
      Name: CustomerName,
      Days: day,
    });
  }
  Compute() {
    arrayList.forEach((currentItem) => {
      var countCost = 0;
      if (currentItem.Days <= 5) {
        countCost = currentItem.Days * 500;
      } else if (currentItem.Days > 5 && currentItem.Days <= 10) {
        var dayStage2 = currentItem.Days - 5;
        countCost = dayStage2 * 400 + 5 * 500;
      } else if (currentItem.Days > 10) {
        var dayStage3 = currentItem.Days - 10;
        countCost = dayStage3 * 200 + 5 * 500 + 5 * 400;
      }
      currentItem['Cost'] = countCost;
      return currentItem;
    });
    console.log(arrayList);
  }
}

const MB = new Mobike();
var R1 = readline.createInterface(process.stdin, process.stdout);
function readPrompt() {
  R1.setPrompt(
    'Enter your choise \n press 1- Display All customer \n press 2- Add new customer \n press 3- Count Cost Pricing'
  );
  R1.prompt();
  R1.on('line', (question) => {
    que = parseInt(question);
    console.log('You have been pressed', que);
    if (que == 1) {
      console.table(arrayList);
      readPrompt();
    } else if (que == 2) {
      MB.addCustomer('GJ06AK8826', 9909854199, 'Ruchi', 11);
      console.log('Customer added');
      readPrompt();
    } else if (que == 3) {
      MB.Compute();
      readPrompt();
    } else {
      R1.close();
    }
  });
}
readPrompt();
