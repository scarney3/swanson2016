// Global vars ///not anymore....
commentForm = {};
commentForm.comments = document.getElementById('commentdisplay');
commentForm.commentForm = document.getElementById('commentform');
commentForm.commentData = [];
commentForm.concernForm = document.getElementById('contactform');

//Contact Form
var Contact = function (firstName, lastName, concern) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.concern = concern;
};
// not sure why this is here just it just sends alerts.
commentForm.contactUsSubmit = function() {
  event.preventDefault();

  if (!event.target.firstname.value || !event.target.lastname.value || !event.target.concern.value) {
    return alert ('You must fill in all the fields');
  }else {
    return alert ('Thank you for your input! Someone will contact you within the next 24 hours.');
  }

  var first = event.target.firstname.value;
  var last = event.target.lastname.value;
  var concern = event.target.concern.value;

  var newContact = new Contact(first, last, concern);
  console.log('Comment by ' + event.target.firstname.value + event.target.lastname + ' says ' + event.target.concern.value);
  event.target.firstname.value = null;
  event.target.lastname.value = null;
  event.target.concern.value = null;
};

commentForm.concernForm.addEventListener('submit', commentForm.contactUsSubmit);

//Comment Form
var Comment = function(userName, commentText) {
  this.userName = userName;
  this.commentText = commentText;
  commentForm.commentData.push(this);
};

commentForm.render = function(comment) {
  var $li = $('<li></li>');
  $li.text('"' + comment.commentText + '"' + ' - ' + comment.userName);
  return $li;
};

commentForm.renderAllComments = function() {
  // comments.innerHTML = '';
  commentForm.commentData.forEach(function(comment) {
    $('#commentdisplay').append(commentForm.render(comment));
  });
};

commentForm.checkLocal= function() {
  if (localStorage.commentData) {
    commentForm.commentData = JSON.parse(localStorage.getItem('commentData'));
    commentForm.renderAllComments();
  } else {
    // load from json.
    var April = new Comment('April Ludgate', 'Usually I hate people, places, and things. Ron\'s OK though.');
    var Leslie = new Comment('Leslie Knope', 'Ron is a poetic noble land mermaid.');
    var Tom = new Comment('Tom Haverford', 'Entertainment720 will be hosting all the dope ass parties in the White House if Ron gets elected.');
    var Andy = new Comment('Andy Dwyer', 'Ron gave me the best advice I ever received. \'Never half-ass two things. Whole-ass one thing.\'');
    var Jerry = new Comment('Jerry/Gary/Larry Gergich', 'Ron has cried twice in his life. Once, when he was 7 and was hit by a bus, and again when he learned that L\'il Sebastian had passed. That\'s the kind of man I\'d like to see as President.');
    var Burt = new Comment('Burt Macklin, FBI','Burt Macklin. FBI. You thought I was dead? So did the President\'s enemies.');
  }
};
commentForm.checkLocal();

commentForm.commentSubmit = function(event) {
  event.preventDefault();
  var $commenter = $('#commentername');
  var $submission = $('#textbox2');
  if (!$commenter.val() || !$submission.val()) {
    return alert ('You must fill in all the fields');
  }

  commentForm.newComment = new Comment($commenter.val(), $submission.val());
  // console.log('Comment by ' + event.target.name.value + ' at ' + Date());
  $commenter.val('');
  $submission.val('');

  localStorage.setItem('commentData', JSON.stringify(commentForm.commentData));
  commentForm.renderAllComments();
};

addEventListener('submit', commentForm.commentSubmit);
commentForm.renderAllComments();
