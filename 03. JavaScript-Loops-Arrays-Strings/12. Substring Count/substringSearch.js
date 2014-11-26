

function countSubstringOccur(arr){

    var string = arr[1].toLowerCase();
    var pattern = new RegExp(arr[0],'g');
    var counter = string.match(pattern).length;

    console.log(counter);

}

countSubstringOccur(['in', 'We are living in a yellow submarine. We don\'t have anything else. Inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.']);
countSubstringOccur(['your', 'No one heard a single word you said. They should have seen it in your eyes. What was going around your head.' ]);
countSubstringOccur(['but', 'But you were living in another world tryin\' to get your message through.']);

