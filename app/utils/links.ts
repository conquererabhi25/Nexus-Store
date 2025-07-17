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
    {href:"order",label:"Order"}
];