let mainC = {
    template: /*html*/`
        <div id="page">
            <div id="empty"></div>
            <div id="text">
                <h1>Mina Cecilie Wøien</h1>
                <p>Computer Science Engineering Student at the University of Stavanger</p>
                <div id="link">
                    <a href="#" v-on:click="toAbout">About Mina</a>
                    <p>Github</p>
                    <p>LinkedIn</p>
                </div>
                <div id="info">
                    <p>Mail: <a href="mailto:mina.cecilie@hotmail.com">mina.cecilie@hotmail.com</a></p>
                    <p>Phone: +47 919 99 801</p>
                </div>
            </div>
        </div>
        
    `,
    methods: {
        toAbout: function(){
            router.push("/about")
        }
    },
};