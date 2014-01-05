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
		
	
		
	 //Events encaptulation ends
	 })();
	

	var custom_modal = function(){
			$("#myModal").modal({backdrop:false , keyboard:false});
			
	};
	
	
	
	//Assigning wysiwyg toolbar to textarea
	$("#textbox").wysihtml5();

});
})(jQuery,window)