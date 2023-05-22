let categoryNow = "survival"

function updateCategory(theElement) {
    removeFocusForAll()
    theElement.classList.add("focus")

    // TADY zjistíš podle categoryNow v jaké jsi kategorii, podle toho pak za pomocí api nastavíš (ve scriptu) vhodné statistiky
    // tato funkce se spustí vždy po kliknutí na tlačítko z posouvače
}

function beginCategory() {
    let list = ["survival", "skygens", "citybuilding"]
    list.forEach(x => {
        let theElement = document.querySelector(`[select-role="${x}"]`)
        theElement.addEventListener("click", ()=>{
            categoryNow = x
            updateCategory(theElement)
        })
    })
}

function removeFocusForAll() {
    let list = ["survival", "skygens", "citybuilding"]
    list.forEach(x => {
        let theElement = document.querySelector(`[select-role="${x}"]`)
        theElement.classList.remove("focus")
    })
}

beginCategory()