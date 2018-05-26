export const toggle={
    data () {
        return {
            isShowing:true
        }
    },
    methods: {
        toggleShow(){
            this.isShowing=!this.isShowing
        }
    }
}