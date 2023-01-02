
function extractLinks(arrlinks) {
    return arrlinks.map((objectLink) => Object.values(objectLink).join(''))
}

export default function validateList(LinkOfList) {
    return extractLinks(LinkOfList);
}