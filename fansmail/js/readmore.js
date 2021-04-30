function showDetials(subject,body){
    var dots = document.getElementById(subject)
    var moreText = document.getElementById(body)

    if (dots.style.display === "none"){
        dots.style.display = "inline"
        moreText.style.display ="none"
    } else {
        dots.style.display = "none";
        moreText.style.display = "inline"
    }
}