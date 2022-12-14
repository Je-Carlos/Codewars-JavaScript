function friend(friends){  
  return friends.filter(function (item) { return item.length === 4 });  
}
console.log(friend(["Ryan", "Kieran", "Mark"]));
