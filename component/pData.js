app.component('data-section', {
    /*html*/
    template:
    `<article>
    <div id="header"><h1>Front-end<br>Developer</h1></div>
        <div class="subject">
            <div class="left">
                <h2>Services</h2>
                <div class="one">
                    <div class="flex"><img v-bind:src="icon1"><p>Web Development</p></div>
                    <br>
                    <p>Lorem ipsum dolor sit ame</p>
                </div>
                <div class="two">
                    <div class="flex"><img v-bind:src="icon2"><p>UI\UX Design</p></div>
                    <br>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
                <div class="three">
                    <div class="flex"><img v-bind:src="icon3"><p>WEb Consulting</p></div>
                    <br>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
            </div>
            <a class="palette" target="_blank" href="./assets/images/kareem.jpg"><div class="pImg"><img v-bind:src="img" v-bind:alt="description"></div></a>
            <div class="right">
                <div>
                    <h3>Vue.js web specialist</h3>
                    <p>I'm designing websites based on vue.js    <br>
                        framework with the most popular tools  <br>
                        such as html, css, javaScript, i'm skilled <br>
                        in handling a variety of jQuery events <br>
                        and jQuey-based DOM.</p>
                </div>
                <div class="hireMe">Hire Me</div>
                <div class="flex">
                    <div>
                        <p>2 years</p>
                        <p class="assesment">Experience</p>
                    </div>
                    <div>
                        <p>50+</p> 
                        <p class="assesment">Projects</p>
                    </div>
                    <div>
                        <p>99%</p>
                        <p class="assesment">Satisfaction</p>
                    </div>
                </div>
                </div>
        </div> 
    </article>`,
    data: function (){
        return {
            img: './assets/images/kareem.jpg',
            icon1: './assets/images/download (1).png',   
            icon2: './assets/images/ui.png',   
            icon3: './assets/images/consult.jpg',   
            description: 'image is aboute to load',   
        }
    }
})