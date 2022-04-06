function get(url, data, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true); // true: 异步
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status == 200 || xhr.status == 304) {
            callback(xhr.responce)
        } else {
            console.log(xhr.statusText);
        }
    }
    xhr.send(null);
}

function post(url, data, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', url, true)
    xhr.setRequestHeader({
        'Content-Type': "application/x-www-form-urlencoded"
    })
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status == 200 || xhr.status == 304) {
            callback(xhr.responce)
        } else {
            console.log(xhr.statusText); 
        }
    }
    xhr.send(data);
}