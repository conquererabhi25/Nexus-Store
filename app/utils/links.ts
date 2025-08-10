// we create and save our important links and functions in the utils folder


type NavLink = {
    href:string,
    label:string
};

export const links : NavLink[] =[
    {href:"/",label:"Home"},
    {href:"/about",label:"About"},
    {href:"/products",label:"Products"},
    {href:"/cart",label:"Cart"},
    {href:"/favorites",label:"Favorites"},
    {href:"order",label:"Order"},
    {href:"/admin/sales",label :"Admin Dashboard "}
];


export const adminLinks : NavLink[] =[
    {href:"/admin/sales",label:"Sales"},
    {href:"/admin/product",label:"Products"},
    {href:"/admin/product/create",label:"Create Product"}
]