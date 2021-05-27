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
                title: "20 best healthy recipies"
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
                title: "The best protein shake"
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
            if (this.myInput.indexOf("@") == -1) {
                alert("Per essere valida l'email inserita deve contenere il simbolo @")
            }

            else if (this.myInput.indexOf(".") == -1) {
                alert("Per essere valida l'email inserita deve contenere il simbolo .")
            }

            else if (this.myInput.length < 8) {
                alert("Per essere validmyInput inserita deve contenere almeno 8 caratteri")
            }

            else if (this.myInput.includes(" ")) {
                alert("Per essere valida l'email inserita non deve contenere spazi")
            }

            else {
                this.email = this.myInput
            }
            
            
        }
    }
    
})