var aboutData=[
    {
        id:"CX",
        h2:"诚信",
        h3:"企业生存的根本",
        text:"仁山国际贸易的企业宗旨，就是以诚信为本，始终站在每一个客户的角度，发现问题，解决问题，自成立以来，仁山国际贸易将诚实守信的理念贯穿于工作的每一处细节，不断求实，坚守准则，为客户创造美好的生活而努力。",
        img:"bg003.jpg",
    },
    {
        id:"ZY",
        h2:"专业",
        h3:"卓越品质的保障",
        text:"仁山国际贸易以专业开发推广非洲材而在业界著称，以非洲材的龙头企业地位而引导市场应用新潮流。瀚达木业已将年销售量提高至30万立方米，主营品种已达到30余种，贡献于木材行业的地板、家具、实木门、工艺雕刻、人造板、建筑装饰用材等多个领域，赢得了国内外众多客户的信赖，并创造了巨大的社会和经济价值。",
        img:"bg004.jpg",
    },
    {
        id:"CX2",
        h2:"创新",
        h3:"企业发展的动力",
        text:"仁山国际贸易不仅是开发销售木材，而且在产品研发领域不断推陈出新，站在客户的角度，发掘新的领域，新的产品，不仅在家装领域，更在收藏等多个维度为客户创造不一样的价值。",
        img:"bg006.jpg",
    },
    {
        id:"GY",
        h2:"共赢",
        h3:"共同努力的目标",
        text:"一个企业的成功，来自于对市场的判断和对客户需求的精准把握，仁山国际贸易不仅深耕于擅长的木材销售领域，更审时度势地创造不一样的机会点，销售是为了盈利，更是一种长期共存的信赖，仁山国际贸易愿意与每一个客户一起发现价值，与伙伴们一起赢得未来的每一天。",
        img:"bg005.jpg",
    },
]

var byId = new Map();
// aboutData.forEach(item => byId.set(item.id, item));
aboutData.forEach(function (item) {
    byId.set(item.id, item)
} )

function getAboutById(id) {
    return byId.get(id);
}

module.exports.getAboutById=getAboutById;