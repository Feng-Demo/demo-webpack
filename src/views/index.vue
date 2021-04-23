<template>
    <div>
        <leftMenu v-model="menuId" :menuData="menuData" @menuIdClick="menuIdClick"></leftMenu>
    </div>
</template>
<script>
    import leftMenu from '../components/left-menu/left-menu.vue';
    export default {
        components:{
            leftMenu
        },
        data() {
            return {
                menuId:'1',
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
        },
        methods:{
            menuIdClick(id) {
                console.log(id);
            }
        }
    }
</script>