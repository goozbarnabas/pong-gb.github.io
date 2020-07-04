function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  var user1 = "goozbarnabas";
  var pass1 = "Barni1234";

  var user2 = "martongratzer";
  var pass2 = "Marci1234";

  var user3 = "gbancsa";
  var pass3 = "Csianka74";

  var user4 = "4";
  var pass4 = "4";

  var user5 = "5";
  var pass5 = "5";

  var user6 = "jozsi";
  var pass6 = "Pong";

  if (username == user1 && password == pass1) {
    window.location = "https://pong-game.tk/vip/0110.html";
  } else if (username == user2 && password == pass2) {
    window.location = "https://pong-game.tk/vip/0120.html";
  } else if (username == user3 && password == pass3) {
    window.location = "https://pong-game.tk/vip/0130.html";
  } else if (username == user4 && password == pass4) {
  } else if (username == user5 && password == pass5) {
  } else if (username == user6 && password == pass6) {
    window.location = "https://pong-game.tk/vip/0160.html";
  }
}
