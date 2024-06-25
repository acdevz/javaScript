const url = 'https://api.github.com/users/acdevs';
const xhr = new XMLHttpRequest();
xhr.open('GET', url);
let data;
xhr.onreadystatechange = function() {
    console.log(xhr.readyState);
    if (xhr.readyState === 4) {
        data = JSON.parse(xhr.responseText);
        console.log(data);
    }
};
xhr.send();