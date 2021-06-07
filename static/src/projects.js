let projectsC = {
    template: /*html*/`
        <div class="page">
            <div class="empty"></div>
            <div class="text">
                <h1>Projects</h1>
                <div id="projects">
                    <div class="project">
                        <h2>LED website</h2>
                        <p>Exam project in web programming at the University.</p>
                        <table>
                            <tr>
                                <td>Lanuages</td>
                                <td>Python (Flask), Javascript (Vue), HTML, Css</td>
                            </tr>
                            <tr>
                                <td>Year</td>
                                <td>2021</td>
                            </tr>
                        </table>
                        <a href="https://github.com/minawoien/DAT310"  target="_blank"> <span id="github"></span></a>
                    </div>
                    <div class="project">
                        <h2>Knitting website</h2>
                        <p>Summer project. A website where I can sell knitting patterns that I create by my self one day.</p>
                        <table>
                            <tr>
                                <td>Lanuages</td>
                                <td>Python (Flask), Javascript (Vue), HTML, Css</td>
                            </tr>
                            <tr>
                                <td>Year</td>
                                <td>2021</td>
                            </tr>
                        </table>
                        <a href="https://github.com/minawoien/DAT310"  target="_blank"> <span id="github"></span></a>
                    </div>
                </div>
                <router-link to="/" class="back">Back</router-link>
            </div>
        </div>
        
    `
};