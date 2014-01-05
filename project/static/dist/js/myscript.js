/*Script Written By Robins Gupta and Ravi Gupta 2014*/

(function($,window){
	

$(document).ready(function(e) {
	//Assign all events here..
	(function(){
		//Adding a click event on list menu
    	$("#menu_icon").click(function(){
			$("#list_menu").toggle();
		});
		
		$("#post").click(function(){
			custom_modal();
		});
		$("#signin").click(function(){
			$("#myLoginModal").modal();
		});
		$("#post_story").click(function(){
			$("#nextModal").modal();
			$("#myLoginModal").modal('hide');
		});
		$("#next_button").click(function(){
			$("#finalModal").modal();
			$("#nextModal").modal('hide');
		});
		$("#enter_button").click(function(){
			$("#finalModal").modal('hide');
		});
		
		
		
	
		
	 //Events encaptulation ends
	 })();
	

	var custom_modal = function(){
			$("#myModal").modal({backdrop:false , keyboard:false});
			//Assign autocomplete to tag_input_box
			$("#input_tag").typeahead({
		  		name: 'Insert tag',
  		  		local: ['trail', 'mms', 'hey','amet', 'consectetur', 'adipisicing' ,'elit', 'sed' ,'eiusmod ','tempor', 'incididunt','labore','dolore ','magna ','aliqua','enim', 'ad ','minim' ,'veniam', 'quis']
			});
			
	};
	
	
	

	//Assigning wysiwyg toolbar to textarea
	$("#textbox").wysihtml5();

});
})(jQuery,window)