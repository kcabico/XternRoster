var url = 'https://xtern-roster.herokuapp.com/people';

function addStudent(student){
  var li = $('li.template')
    .clone()
    .removeClass('template')
    .attr('data-id', student.id);

    li.find('.student-name')
      .html(student.name);

    $('#roster_List').append(li);
};


$(function(){
  $.get({
    url: url,
    success: function processNames(people){
      $.each(people, function(i, student){
        addStudent(student);
      });
    }
  });
});
