$(document).raedy(function(){
  function get(){
  $('#searchUser').on('keyup',function(e){
    var username = e.target.value;
    $.ajax({
      url: 'https://api.github.com/users/' + username,
      data:{
        client_id: '34ff0892007215f34654',
        client_secret: 'bf2fd590bd738912b5fed94a5d4cbaf9f9fc8d2e'
      }

      success: function(user){
         var data = user.name;
         if(user){
           $('#profile').html(`
             <h3>Profile name : - ${user.name}</h3>
             `);
         }else{
           $('#profile').html(`
             <h3>No profile found like ${user.name}</h3>
             `);

    });
  }
  $('#searchUser').keyup(function(){
    get();
  });

    }

  });
});
