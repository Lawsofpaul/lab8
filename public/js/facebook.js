function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

function statusChangeCallback(response) {
  console.log('Facebook login status changed.');
  console.log(response);
  // The response object is returned with a status field that lets the
  // app know the current login status of the person.
  // Full docs on the response object can be found in the documentation
  // for FB.getLoginStatus().
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
    FB.api('/me?fields=name,first_name,picture.width(480)', changeUser);
  }
}

function changeUser(response) {
  console.log(response);
  var username = response['name'];
  $("#name").text(username);
  //var photo = response['url'];
  $("#photo").attr('src', "https://scontent.xx.fbcdn.net/v/t1.0-1/1013152_685704481447110_582245445_n.jpg?oh=1791105b66cf8301f4b05c1d626c61c2&oe=596A01D3");
}
