function daboClicked(){
	//you clicked on my dog! 
	$(".bottomImage").click(function(event){
		window.open('https://www.instagram.com/diablo.doggo/', '_blank');
	});

}

function initPage(){
	daboClicked();
	try{
		let builder = new PageBuilder({
			pageData
		});
		builder.createPage();
	}
	catch(e){
		console.warn(e);
	}
}

$(initPage);