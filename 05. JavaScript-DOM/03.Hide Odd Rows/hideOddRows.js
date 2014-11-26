function hideOddRows(){

    var td = document.getElementsByTagName('td');

    for (i = 0; i < td.length; i++) {

        if(i%2==0){

            td[i].remove();
            td[i+2].remove();
        }

    }


}