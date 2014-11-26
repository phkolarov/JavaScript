function findYoungestPerson(persons) {

    var sorted = persons.slice(0).sort(function(a, b){return a.age - b.age});

    return console.log("The youngest person is " + sorted[0].firstname + " " + sorted[0].lastname);
}

var persons = [
    { firstname : 'Baba', lastname: 'Ginka', age: 40},
    { firstname : 'George', lastname: 'Kolev', age: 32},
    { firstname : 'Bay', lastname: 'Ivan', age: 81}]            //Changed Order
findYoungestPerson(persons);

