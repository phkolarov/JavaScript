var  values = [7,254,587];
var count = 0;
function checker()
{
    for (var i in values)

    {

        for(k=1; k<=values[i]; k++)
        {
           if( values[i]%k == 0)
           {
              count++;
           }

        }

        if(count<3)
        {
            console.log(true)
            count=0;
        }
        else
        {
            console.log(false)
            count=0;
        }


    }
}
checker();