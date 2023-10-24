document.getElementById('button').addEventListener('click', loadUser);

function loadUser() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.github.com/users', true);
  xhr.onload = function () {
    if (this.status == 200) {
      var users = JSON.parse(this.responseText);
      var output = '';
      for (var i in users) {
        output +=
          '<div class="user">' +
          '<img src="' +
          users[i].avatar_url +
          '" width="70" height="70">' +
          '<ul>' +
          '<li>id: ' +
          users[i].id +
          ' </li>' +
          '<li>login: ' +
          users[i].login +
          ' </li>' +
          '<li>type: ' +
          users[i].type +
          ' </li>' +
          '</ul>' +
          '</div>';
      }
      document.getElementById('users').innerHTML = output;
    }
  };
  xhr.send();
}
