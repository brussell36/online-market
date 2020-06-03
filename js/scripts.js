$(document).ready(function() {
  $("#flowerForm").submit(function(event) {
    event.preventDefault();
    const flowers = $(#flowerform:radio[name=flower]:checked).val();
    const vaseType = $("#vase").val();
  })
});