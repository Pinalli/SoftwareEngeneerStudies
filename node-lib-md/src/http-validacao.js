import chalk from "chalk";

function extractLinks(arrlinks) {
    return arrlinks.map((objectLink) => Object.values(objectLink).join(''))
}

async function StatusCheck(URLsList) {
    const statusArray = await Promise
        .all(
            URLsList.map(async (URL) => {
                try {
                    const res = await fetch(URL);
                    return res.status;
                } catch (error) {
                    return manageError(error)
                }

            })
        )
    return statusArray;
}

function manageError(error) {
    if (error.cause === 'ENOTFOUND') {
        return 'link not found';
    } else {
        return 'Something went wrong, link not found!';
    }
}

export default async function validateList(LinkOfList) {
    const links = extractLinks(LinkOfList);
    const status = await StatusCheck(links);

    return LinkOfList.map((object, index) => ({
        ...object,
        status: status[index]
    }))

}

