document.getElementById('button1').addEventListener('click', loadUser);
document.getElementById('button2').addEventListener('click', loadUsers);
function loadUser() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'user.json', true);
  xhr.onload = function () {
    if (this.status == 200) {
      var user = JSON.parse(this.responseText);
      var output = '';
      output +=
        '<ul>' +
        '<li>name: ' +
        user.name +
        '</li>' +
        '<li>company: ' +
        user.company +
        '</li>' +
        '<li>email: ' +
        user.email +
        '</li>' +
        '<li>balance: ' +
        user.balance +
        '</li>' +
        '</ul>';
      document.getElementById('user').innerHTML = output;
    }
  };
  xhr.send();
}
function loadUsers() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'users.json', true);
  xhr.onload = function () {
    if (this.status == 200) {
      var users = JSON.parse(this.responseText);
      var output = '';
      for (var i in users) {
        output +=
          '<ul>' +
          '<li>name: ' +
          users[i].name +
          '</li>' +
          '<li>company: ' +
          users[i].company +
          '</li>' +
          '<li>email: ' +
          users[i].email +
          '</li>' +
          '<li>balance: ' +
          users[i].balance +
          '</li>' +
          '</ul>';
      }
      document.getElementById('users').innerHTML = output;
    }
  };
  xhr.send();
}
