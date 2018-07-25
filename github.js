$(document).ready(function(){
  $('#searchUser').on('keyup',function(e){
    var username = e.target.value;
    $.ajax({
      url: 'https://api.github.com/users/'+username,
      data:{
        client_id: '34ff0892007215f34654',
        client_secret: 'bf2fd590bd738912b5fed94a5d4cbaf9f9fc8d2e'

      }
    }).done(function(user){
      //we can write html code here since this is format to write in ejs plz note the sign after bracket
      $('#profile').html(`
        <div class="container center">
        <img  class="img img-responsive" style="border-radius:1px 2px blue" src=${user.avatar_url}></img>
        <h3 class="username">${user.name}</h3>
        <h3 class="userbio">${user.bio}</h3>
        <h3 class="location">${user.location}</h3>
        <h3 class="follower">Followers:-${user.followers}</h3>
        <h3 class="following">Following:-${user.following}</h3>
        <center style="width:auto"><button type="button" class="btn btn-info btn-large"><a href=${user.html_url} target="_blank" style="font-size:10px">View Profile</a></button></center>
        </div>
        `);
      });
  });
});
