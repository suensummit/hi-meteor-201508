// Global
console.log("Both sides");
Message = new Mongo.Collection("message");

// Client
if (Meteor.isClient) {
  console.log("Client side");
  // body: for loop
  Template.body.helpers({
    Msgs: [
      {text : "gaaa"},
      {text : "heee"},
      {text : "yaaa"}
    ]
  })
}

// Server
if (Meteor.isServer) {
  console.log("Server side");
}
