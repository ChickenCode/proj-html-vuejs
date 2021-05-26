new Vue({
    el: "#root",
    data: {
        email: "",
        myInput: "",
        search: false,
        posts: [
            {
                title: "First random title"
            },
            {
                title: "Another random title"
            },
            {
                title: "Random titles still exist"
            },
            {
                title: "10 best fruits to eat for breakfast"
            },
            {
                title: "Eating bananas is dangerous for your health"
            },
            {
                title: "The best protein shake"
            },
            {
                title: "Tips to find training partners"
            },
            {
                title: "New juices available now"
            },
            {
                title: "Ultimate cardio workout"
            },
            {
                title: "20 best healthy recipies"
            },
        ],

        navbar: [
            {
                link: "Home",
                add: ""
            },
            {
                link: "Services",
                add: ""
            },
            {
                link: "About",
                add: ""
            },
            {
                link: "Videos",
                add: ""
            },
            {
                link: "Blog",
                add: ""
            },
            {
                link: "Store",
                add: "new"
            },
        ]
    },
    
    methods: {
        preventDefault() {
            event.preventDefault()
        },

        openSearch() {
            if (!this.search) {
                this.search = true
            }

            else {
                this.search = false
            }
        },

        setEmail() {
            this.email = this.myInput
        }
    }
    
})