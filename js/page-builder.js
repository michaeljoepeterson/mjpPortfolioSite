class PageBuilder{
    pageData;

    constructor(data){
        let {pageData} = data;
        this.pageData = pageData;
    }

    createPage(){
        console.log('create page');
        this.pageData.forEach(section => {
            console.log(section);
        });
    }
}