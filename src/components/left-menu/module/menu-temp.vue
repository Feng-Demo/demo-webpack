<template>
    <div class="menu-temp" @click.stop="handleMenu()">
        <div :class="menuId === menuItem.id?'active':''">{{menuItem.name}}</div>
        <MenuTemp v-for="item in menuItem.children" :key="item.id" :menuItem="item" :menuId="menuId"></MenuTemp>
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
        methods:{
            handleMenu() {
                this.changeMenuId(this.menuItem.id);
            },
        }
    }
</script>