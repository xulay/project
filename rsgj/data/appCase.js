var appCaseData=[
    {
        id:"YSP",
        img1:"4441.jpg",
        img2:"4442.jpg",
        img3:"4443.jpg",
        img4:"4444.jpg",
        img5:"4445.jpg",
        img6:"4446.jpg",
        title:"应用案例-艺术品",
        nav:"0",
    },
    {
        id:"DB",
        img1:"0001.jpg",
        img2:"0002.jpg",
        img3:"0003.jpg",
        img4:"0004.jpg",
        img5:"0005.jpg",
        img6:"0006.jpg",
        title:"应用案例-地板",
        nav:"1",
    },
    {
        id:"LT",
        img1:"2221.jpg",
        img2:"2222.jpg",
        img3:"2223.jpg",
        img4:"2224.jpg",
        img5:"2225.jpg",
        img6:"2226.jpg",
        title:"应用案例-楼梯",
        nav:"2",
    },
    {
        id:"MM",
        img1:"3331.jpg",
        img2:"3332.jpg",
        img3:"3333.jpg",
        img4:"3334.jpg",
        img5:"3335.jpg",
        img6:"3336.jpg",
        title:"应用案例-木门",
        nav:"3",
    },
    {
        id:"JJ",
        img1:"1111.jpg",
        img2:"1112.jpg",
        img3:"1113.jpg",
        img4:"1114.jpg",
        img5:"1115.jpg",
        img6:"1116.jpg",
        title:"应用案例-家具",
        nav:"4",
    },
]

var byId = new Map();
appCaseData.forEach(item => byId.set(item.id, item));

function getAppById(id) {
    return byId.get(id);
}

module.exports.getAppById=getAppById;