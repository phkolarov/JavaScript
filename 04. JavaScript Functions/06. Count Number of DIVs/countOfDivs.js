function countOfDivs(html){
    var count = html.match(/<div/g);
    return console.log(count.length);
}
countOfDivs('<!DOCTYPE html>\r\n<html>\r\n<head lang=\"en\">\r\n    <meta charset=\"UTF-8\">\r\n    <title>index<\/title>\r\n    <script src=\"\/yourScript.js\" defer><\/script>\r\n<\/head>\r\n<body>\r\n    <div id=\"outerDiv\">\r\n        <div\r\n    class=\"first\">\r\n            <div><div>hello<\/div><\/div>\r\n        <\/div>\r\n        <div>hi<div><\/div><\/div>        \r\n        <div>I am a div<\/div>\r\n    <\/div>\r\n<\/body>\r\n<\/html>\r\n');