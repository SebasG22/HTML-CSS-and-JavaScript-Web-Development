/**
 * Created by SebasG on 10/05/16.
 */


function getPositionResult(position) {
    console.log(position.coords.latitude + ' '+ position.coords.longitude);
}
navigator.geolocation.getCurrentPosition(getPositionResult);

function refreshPosition(position) {
    var list = document.getElementById('positionList');
    list.innerHtml += ('<li>' + position.coords.latitude + ' ' +position.coords.longitude + '</li>');
}
navigator.geolocation.watchPosition(refreshPosition);