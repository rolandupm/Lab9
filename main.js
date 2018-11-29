$(function(){
    $("#button").click(function(){
        $.ajax
		({
		  url: "https://www.w3schools.com/tags/tag_doctype.asp",
		  cache: false,
		  success: function(data){
				console.log(data);
				$("#content").append(JSON.stringify(data));
		  },
		  error: function(error){
				  console.log(error);
				$("#content").append(JSON.stringify(error));
		  }
		});
    });
});

