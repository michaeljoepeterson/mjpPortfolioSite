class PageBuilder{
    pageData;
    contentContainer;

    constructor(data){
        let {pageData} = data;
        this.pageData = pageData;
        this.contentContainer = $('#page-content');
    }

    createPage(){
        console.log('create page');
        this.pageData.forEach(project => {
            console.log(project);
            let projectImage = new ProjectImage(project);
            let image = projectImage.buildImage();

            let projectContent = new ProjectSection(project);
            let content = projectContent.buildSection();
            
            this.appendContent(image);
            this.appendContent(content);
        });
    }

    appendContent(content){
        this.contentContainer.append(content);
    }
}