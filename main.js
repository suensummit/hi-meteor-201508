// Global
console.log("Both sides");
Message = new Mongo.Collection("message");

// Sample Messages
sampleMessages = [
  {text : "gaaa", from : "db"},
  {text : "heee", from : "db"},
  {text : "yaaa", from : "db"}
]

// Client
if (Meteor.isClient) {
  console.log("Client side");
  // body: for loop
  Template.body.helpers({
    Msgs: function() {
      return(Message.find())
    }
    // Msgs: sampleMessages
    // Msgs: [
    //   {n : 1, text : "gaaa"},
    //   {n : 2, text : "heee"},
    //   {n : 3, text : "yaaa"}
    // ]
  })
  Template.body.events({
    "change #inputMsg" : function(e, t){
      // console.log("hello log");
      // console.log($(e.target).val());
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
  console.log("Server side");
  if (Message.find().count() === 0) {
    for (i in sampleMessages) {
      Message.insert(sampleMessages[i])
    }
  }
}
