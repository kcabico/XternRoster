$('#roster_Form').on('submit', createPerson);

function createPerson(ev){
 ev.preventDefault();
 var name = ev.currentTarget.name.value;
 $.post({
   url: url,
   data: {
     person: {
       name: name,
       promoted: false,
     }
   },
   success: addStudent
 });
}


// function addPerson(person){
//  var li = $('li.template')
//      .clone()
//      .removeClass('template')
//      .attr('data-id', student.id);
//
//  li.find('.student-name')
//    .html(student.name);
//
//  $('#roster_List').append(li);
// }
