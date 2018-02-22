// Write your solution in this file!
var customerName = 'bob'

function upperCaseCustomerName(){
  return customerName = customerName.toUpperCase();
}
//this accepts the customerName variable because customerName is in the global scope

function setBestCustomer () {
  bestCustomer = 'not bob';
}
//by not using var/let bustCustomer is set to global scope. This is bad practice

function overwriteBestCustomer (newFavorite) {
  bestCustomer = newFavorite;
}
//because bestCustomer is in the global scope it can easily be changed accidentally

const leastFavoriteCustomer = 'sour fred';

function changeLeastFavoriteCustomer  () {
  leastFavoriteCustomer = 'not sour fred';
}
