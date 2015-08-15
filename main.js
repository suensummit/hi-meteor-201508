// Global
Message = new Mongo.Collection("message");

// Client
if (Meteor.isClient) {
  // body: for loop
  Template.guestBook.helpers({
    Msgs: function() {
      return(Message.find({},{sort:{createdAt:-1}}))
    }
  })
  Template.guestBook.events({
    "change #inputMsg" : function(e, t){
      msg = $(e.target).val();
      // usr = $("#inputUsr").val();
      // if (!usr){
      //   usr = "Anonymous"
      // }
      $("input").val("");
      msgData = {
        text : msg,
      };
      Meteor.call("createMessage", msgData)
    }
  })
}

// Server
if (Meteor.isServer) {
  Meteor.methods({
    createMessage: function(msgData){
      usr = Meteor.userId();
      if (usr){
        msgData.userId = usr;
        msgData.user = Meteor.user().profile.name;
        msgData.createdAt = new Date;
      }
      Message.insert(msgData);
    }
  })
}
