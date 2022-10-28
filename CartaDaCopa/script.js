let isExplore = true

function changeCard(event) {
    const card = (event.currentTarget)
    const backgroundImage = isExplore
        ? "url(./assents/bg-ignite.svg)"
        : "url(./assents/bg-explore.svg)"
        isExplore = !isExplore

    card.style.backgroundImage = backgroundImage
}