class ProjectImage{
    pageData;
    constructor(pageData){
        this.pageData = pageData;
    }

    buildImage(){
        let image = $(`
        <div id="${this.pageData.id}" class="pimg" style="background-image:url('${this.pageData.image}')">
            <div class="ptext">
                <span class="border">
                    <a aria-label="food near you link" target="_blank" href="${this.pageData.href}">${this.pageData.title}</a>
                </span>
            </div>
        </div>
        `);

        return image;
    }
}