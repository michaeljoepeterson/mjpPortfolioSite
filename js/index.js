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
		let nav = new Navbar({
			pageData
		});
		nav.build();
	}
	catch(e){
		console.warn(e);
	}
}

$(initPage);