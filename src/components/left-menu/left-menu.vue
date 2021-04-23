<template>
    <div class="left-menu">

        <MenuTemp v-for="item in menuData" :menuId.sync="menuId" :key="item.id" :menuItem="item"></MenuTemp>

    </div>
</template>
<script>
    import MenuTemp from './module/menu-temp.vue';
    export default {
        components:{
            MenuTemp
        },
        props: {
            menuData: Array
        },
        provide() {
            return {
                changeMenuId: (id = '') => {
                    this.menuId = id;
                }
            }
        },
        data() {
            return {
                menuId:'12'
            }
        },
        methods:{
        }
    }
</script>