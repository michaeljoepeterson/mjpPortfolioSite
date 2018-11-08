function daboClicked(){
	//you clicked on my dog! 
	$(".bottomImage").click(function(event){
		const win = window.open('https://www.instagram.com/diablo.doggo/', '_blank');
		if (win) {
		    
		    win.focus();
		} else {
		    
		    alert('Pop up blocked, my dog is sad :(');
		}
	});

}

function initPage(){
	daboClicked();
}

$(initPage);