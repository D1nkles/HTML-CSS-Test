function searchFunction(getInputFunction)
{
    let videoElements = document.getElementsByClassName('video-container');
    for (let i = 0; i <= videoElements.length; i++) {
    let childElements = videoElements[i];
        let videoDescription = childElements.getElementsByTagName('h3')[0].innerText.toLowerCase();
        if (videoDescription.includes(getInputFunction())) {
            videoElements[i].style.display = 'inline-block';
    }
    else {
        videoElements[i].style.display = 'none';
    }
    }
}