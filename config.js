
module.exports={
    siteUrl: 'https://dubaniagency.com/',
    generateRobotsTxt: true,
    robotsTxtOptions:{
        policies:[
            {userAgent:'*',disallow:"/webdesign"},
            {userAgent:'*',disallow:"/developpement"},
            {userAgent:'*',allow:"/"},
        ],
    },
    exclude:["/webdesign","/developpement"],
}