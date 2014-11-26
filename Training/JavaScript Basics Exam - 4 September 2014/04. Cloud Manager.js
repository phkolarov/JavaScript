function solve(args){





    var result = {};

    for(i=0; i<args.length; i++){

        var element = args[i].split(" ");

        var filess=element[0];
        var extensionss=element[1].toString();
        var sizess=parseFloat(element[2]).toFixed(2);



        result[extensionss].files.push(filess);
        result[extensionss].memory.push(sizess);

    }



    console.log(result)

}




solve(["sentinel .exe 15MB", "zoomIt .msi 3MB","skype .exe 45MB","trojanStopper .bat 23MB","kindleInstaller .exe 120MB","setup .msi 33.4MB","winBlock .bat 1MB"]);