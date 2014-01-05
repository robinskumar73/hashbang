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
			$("#tag_me").click(function(){
				$("#insert_tag_modal").modal({backdrop:false});
				$("#add_tag_box").click(function(){	
					if($("#add_tag").val()){
						
						jQuery('.wysihtml5-sandbox').contents().find('body').append("<h1>"+$("#add_tag").val() +"</h1>");
						//$("body.form-control.text_box.wysihtml5-editor").append($("#add_tag").val());
						$("#insert_tag_modal").modal('hide');
					}
			});
			});
		});
		
	
		
	 //Events encaptulation ends
	 })();
	

	var custom_modal = function(){
			$("#myModal").modal({backdrop:false , keyboard:false});
			$("#textbox").attr('rows','20');
			//Activate iframe box
			jQuery('<iframe class="wysihtml5-sandbox"/>').appendTo('body');
			//Disable post_now and post_later button
			$('#post_story').prop('disabled', true);
			$("#myModal").on('shown.bs.modal',function(e){
				//Focus the heading..
				$(".heading_edit_box").focus();
				
			});
			
			
	};
	
	
	
	//Assigning wysiwyg toolbar to textarea
	$("#textbox").wysihtml5();

});
})(jQuery,window)
