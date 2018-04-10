function formatTag(tag) {
  if (tag.new_tag)
    return $('<span>' + tag.text + ' <ii class="label label-warning">Create new tag</ii></span>');
  else
    return $('<span>' + tag.text + '</span>');
}


var option_values = []

$("#test_tags option").each(function(){
  option_values.push($(this).val());
})


$('#test_tags').select2({
  tags: true,
  insertTag: function(data, tag) {
    data.push(tag); // Place new tag last
  },
  templateResult: formatTag,
  createTag: function(params){

    if (option_values.indexOf(params.term) == -1) //New
    return {
      id: params.term,
      text: params.term,
      new_tag: true
    };
    else
    return {
      id: params.term,
      text: params.term,
      new_tag: false
    };
  }
});
