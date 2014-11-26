
function variablesTypes(value)
{
    var name = "My name: " + value[0] + " //type is " + typeof (value[0])+ "\n";
    var age = "My age: " + value[1] + " //type is " + typeof (value[1])+ "\n";
    var male = "I am male: " + value[2] + " //type is " + typeof (value[2])+ "\n";
    var food = "My favorite foods are: " + value[3] + " //type is " + typeof (value[3])+ "\n";
    return name + age + male + food;

}



console.log(variablesTypes(['Pesho', 22, true, ['fries', 'banana', 'cake']]));