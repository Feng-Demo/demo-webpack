<template>
    <div>
        <leftMenu></leftMenu>
    </div>
</template>
<script>
    import leftMenu from '../components/left-menu/left-menu.vue';
    export default {
        components:{
            leftMenu
        },
        mounted() {
            console.log(process);
        }
    }
</script>