
var customerName = 'bob';  //let doesnt work
 
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer(){
    bestCustomer ='not bob';
}

function overwriteBestCustomer(newCustomer){
    bestCustomer = newCustomer;
}


function changeLeastFavoriteCustomer(){
    const leastFavouriteCustomer ='jojo'  //cant reasign a const variable
    leastFavouriteCustomer = 'mark';
};