class Navbar{
    pageData;
    contentContainer;

    constructor(data){
        let {pageData} = data;
        this.pageData = pageData;
        this.contentContainer = $('#navlist');
    }

    build(){
        this.pageData.forEach(project => {
            let link = this.buildNavLink(project);
            this.appendContent(link);
        });
    }

    buildNavLink(project){
        let link = $(`
        <li class="nav-item">
            <a class="nav-link" href="#${project.id}">${project.title}</a>
        </li>`);
        return link;
    }

    appendContent(content){
        this.contentContainer.append(content);
    }
}