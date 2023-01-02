export const paginationLogic = (currentPage, pokemonsFilter) => {

    const pokemonsPerPage = 12
    let pokemonsInPage = []
    const sliceStart = (currentPage - 1) * pokemonsPerPage
    const sliceEnd = currentPage * pokemonsPerPage
    pokemonsInPage = pokemonsFilter.slice(sliceStart, sliceEnd)

    const arrayPages = []
    const quantityPages = Math.ceil(pokemonsFilter.length / pokemonsPerPage)
    for (let i = 1; i <= quantityPages; i++) {
        arrayPages.push(i)
    }
    const lastPage = arrayPages[arrayPages.length - 1]

    let pagesInBlock = []
    let pagesPerBlock = 1
    let actualBlock = 1
    for (let currentBlock = 1; currentBlock + pagesPerBlock < currentPage; currentBlock++) {
        actualBlock = currentBlock + 1
    }
    const minPage = actualBlock * pagesPerBlock - pagesPerBlock
    for (let currentPageInBlok = actualBlock * pagesPerBlock; currentPageInBlok > minPage; currentPageInBlok--) {
        if (currentPageInBlok <= lastPage) {
            pagesInBlock.unshift(currentPageInBlok)
        }
    }


    return { pagesInBlock, lastPage, pokemonsInPage }
};