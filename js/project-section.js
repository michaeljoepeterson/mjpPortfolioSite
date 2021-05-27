class ProjectSection{
    pageData;
    constructor(pageData){
        this.pageData = pageData;
    }

    buildSection(){
        let image = $(`
        <section class="section section_dark">
			<h2>${this.pageData.title}</h2>
			<p>${this.pageData.description}</p>
			<p>
			Built With:  ${this.pageData.builtWith}
			</p>
            ${this.pageData.gitLinks.map(link => {
                let linkString = `<p>${link.text ? link.text : 'Github'}</p>
                <a aria-label="${link.ariaLabel}" target="_blank" href="${link.href}"><img alt="Github Icon"  src="images/githubLight.png"></a>`;
                return linkString;
            }).join('')}
		</section>
        `);

        return image;
    }
}