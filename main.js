console.log("Both sides");

if (Meteor.isClient) {
  console.log("Client side");
  // using helpers to insert variables
  Template.message.helpers({
    test: "test by helpers"
  })
  // body: for loop
  Template.body.helpers({
    testArray: _.range(0,10),
    Msgs: [
      {n : 1, text : "gaaa"},
      {n : 2, text : "heee"},
      {n : 3, text : "yaaa"}
    ]
  })
}

if (Meteor.isServer) {
  console.log("Server side");
}
