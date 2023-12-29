import {getChildren} from "vuepress-sidebar-atuo";

// const {getChildren}
module.exports = {
    '/npm/': [
        {
            title: '基础知识',
            collapsable: true,
            children: getChildren('/')
        },
        // {
        //     title: '高级进阶',
        //     collapsable: true,
        //     children: getChildren('./../npm/')
        // }
    ],
    // '/jottings/': [
    //     {
    //         title: '随笔',
    //         collapsable: true,
    //         children: getChildren('./../npm/')
    //     },
    // ]
}