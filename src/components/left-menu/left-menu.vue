<template>
    <div class="left-menu">

        <MenuTemp v-for="item in menuData" :key="item.id" :menuItem="item"></MenuTemp>

    </div>
</template>
<script>
    import MenuTemp from './module/menu-temp.vue';
    export default {
        components:{
            MenuTemp
        },
        data() {
            return {
                menuData: [
                    {
                        name: '主菜单',
                        id: '1',
                        children: [
                            {
                                name: '二级菜单1',
                                id: '11',
                                children: [],
                            },
                            {
                                name: '二级菜单2',
                                id: '12',
                                children: [
                                    {
                                        name: '三级菜单1',
                                        id: '121',
                                        children: [],
                                    },
                                    {
                                        name: '三级菜单2',
                                        id: '122',
                                        children: [],
                                    }
                                ],
                            },
                        ],
                    },
                    {
                        name: '一级菜单2',
                        id: '2',
                        children: [],
                    },
                ]
            }
        }
    }
</script>