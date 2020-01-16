export default {
    name: 'mine',
    path: '/mine',
    component: ()=> import('../views/Mine'),
    children:[
        {name:"list",path:"list",component:()=>import("@/views/Mine/List")},
        {name:"car",path:"car",component:()=>import("@/views/Mine/Car")}
    ]
}