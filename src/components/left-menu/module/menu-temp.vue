<template>
    <div class="menu-temp" @click.stop="handleMenu()">
        <div class="menu-text" :class="menuId === menuItem.id?'active':''">
            {{menuItem.name}}
            <!--<span style="float: left;" @click="isShowMenu = !isShowMenu" v-text="isShowMenu?'收起':'展开'"></span>-->
        </div>
        <MenuTemp v-for="item in menuItem.children" v-show="isShowMenu" :key="item.id" :menuItem="item" :menuId="menuId"></MenuTemp>
    </div>
</template>
<script>
    export default {
        name: 'MenuTemp',
        components: {},
        props:{
            menuId: String,
            menuItem: Object,
        },
        inject: ['changeMenuId'],
        watch:{
            menuId(val) {
                console.log(val);
//                this.isShowMenu = this.menuId === this.menuItem.id;
            }
        },
        data() {
            return {
                isShowMenu: true,
            }
        },
        methods:{
            handleMenu() {
                this.changeMenuId(this.menuItem.id);
            },
        }
    }
</script>