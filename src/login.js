function validate(event) {
    event.preventDefault()
    var userName = document.getElementById('login_UserName').value;
    var password = document.getElementById('login_Password').value;
    if(userName === 'admin' && password === '1') {
        window.location = "search.html"
    } else { 
        alert('wrong usename or password') 
    }

}

window.onload = function() {
    var form = document.getElementById("login_Form");
    form.addEventListener('submit', validate);
}