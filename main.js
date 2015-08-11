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
      $(e.target).val("");
      msgData = {
        text : msg,
        createdAt : new Date,
      };
      Message.insert(msgData);
    }
  })
}

// Server
if (Meteor.isServer) {
}
