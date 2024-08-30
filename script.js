document.addEventListener('DOMContentLoaded', () => {
    const images = document.getElementsByClassName('image');
    const tiers = document.getElementsByClassName('dragged-images');
    const imageContainer = document.getElementsByClassName('image-container');
    let currentlyDraggedImage;

    for (const image of images){
        image.addEventListener('dragstart', (e) => {
            setTimeout(() => {
                currentlyDraggedImage = e.target.parentElement;
                e.target.parentElement.classList.add('hide');
            }, 0)
        })

        image.addEventListener('dragend', (e) => {
            e.target.parentElement.className = 'image';
        })
    }

    for (const tier of tiers){
        tier.addEventListener('dragover', (e) => {
            e.preventDefault();
        })

        tier.addEventListener('drop', (e) => {
            if (currentlyDraggedImage && e.target.classList.contains('dragged-images')) {
                e.target.appendChild(currentlyDraggedImage); 
            }

            if (currentlyDraggedImage && e.target.tagName === 'IMG') {
                e.target.parentElement.parentElement.append(currentlyDraggedImage);
            }
        })
    }


    imageContainer[0].addEventListener('dragover', (e) => {
        e.preventDefault();
    })

    imageContainer[0].addEventListener('drop', (e) => {
        if(currentlyDraggedImage) e.target.append(currentlyDraggedImage);
    })

})