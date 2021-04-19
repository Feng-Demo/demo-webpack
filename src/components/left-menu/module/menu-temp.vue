<template>
    <div class="menu-temp">
        <div>{{menuItem.name}}</div>
        <MenuTemp v-for="item in menuItem.children" :key="item.id" :menuItem="item"></MenuTemp>
    </div>
</template>
<script>
//    import menuTemp from './menu-temp.vue'
    export default {
        name: 'MenuTemp',
        components: {
//            menuTemp
        },
        props:{
            menuItem: Object
        }
    }
</script>