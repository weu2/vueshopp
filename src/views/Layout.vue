<template>
    <div>
        {{registermsg}}
    </div>
</template>

<script>

    export default {
        name: "Layout",
        data(){
            return{
                registermsg:''
            }
        },
        mounted() {
            this.$bus.$on('register',register=>{
                console.log("layout",register)
                this.registermsg=register.data.message
            })

        },
        components:{
        }
    }
</script>

<style scoped>

</style>