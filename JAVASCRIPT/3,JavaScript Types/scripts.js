/**
 * Created by SebasG on 9/05/16.
 */
var $elem= document.getElementById('output');
$elem.innerHTML+= 'Test <br/>';
$elem.innerHTML+= 4+6+'<br/>';
$elem.innerHTML+= (4+6)+'&nbspDemo';

var testVariable = null;
var isUndefined= (testVariable === undefined);
var isNull=(testVariable === null);
var isEmpty=(testVariable === '');


document.getElementById('isUndefined').innerHTML=isUndefined;
document.getElementById('isNull').innerHTML=isNull;
document.getElementById('isEmpty').innerHTML=isEmpty;