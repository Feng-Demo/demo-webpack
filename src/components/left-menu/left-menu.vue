<template>
    <div class="left-menu">
        <div class="menu-layout">
            <div class="logo">Feng</div>
            <input ref="input" style="display: none;" :value="menuId" @input="$emit('changeMenu',$refs.input.value)">
            <MenuTemp :ref="'MenuTemp' + menuId" v-for="item in menuData" :menuId="menuId" :key="item.id" :menuItem="item"></MenuTemp>
        </div>
    </div>
</template>
<script>
    import MenuTemp from './module/menu-temp.vue';
    export default {
        components:{
            MenuTemp
        },
        props: {
            menuId: String,
            menuData: Array,
        },
        model: {
            prop:'menuId',
            event:'changeMenu'
        },
        watch:{
            menuId() {
            }
        },
        provide() {
            return {
                changeMenuId: (id = '') => {
                    this.$emit('changeMenu',id);
                }
            }
        },
        data() {
            return {

            }
        },
        methods:{
        }

    }
</script>