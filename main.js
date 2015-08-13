// Global
Message = new Mongo.Collection("message");

// Client
if (Meteor.isClient) {
  // body: for loop
  Template.body.helpers({
    Msgs: function() {
      return(Message.find({},{sort:{createdAt:-1}}))
    }
  })
  Template.body.events({
    "change #inputMsg" : function(e, t){
      msg = $(e.target).val();
      // usr = $("#inputUsr").val();
      // if (!usr){
      //   usr = "Anonymous"
      // }
      $("form > input").val("");
      msgData = {
        text : msg,
        createdAt : new Date,
      };
      usr = Meteor.userId();
      if (usr){
        msgData.userId = usr;
        msgData.user = Meteor.user().profile.name;
      }
      Message.insert(msgData);
    }
  })
}

// Server
if (Meteor.isServer) {
}
