var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
  customerName;
}

var bestCustomer;

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer(name) {
  bestCustomer = name;
}

const leastFavoriteCustomer = 'Tim';

function changeLeastFavoriteCustomer(name) {
  leastFavoriteCustomer = 'Rob';
}
