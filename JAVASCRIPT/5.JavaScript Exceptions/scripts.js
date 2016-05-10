/**
 * Created by SebasG on 10/05/16.
 */
function correctMethodName() {
    return "Output Message";
}
try{
    var result = wrongMethodName(3);
    document.write(result);
}
catch(error){
    document.writeln('<h3>Error:&nbsp;</h3><p>'+error+'</p>');
}

