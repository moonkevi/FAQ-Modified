// select all questions
const questions = document.querySelectorAll('.question')

// loop through each question

questions.forEach(function(qn){

    // listen for a click
    qn.addEventListener('click', function(){
        const answers = qn.nextElementSibling;

        // find plus or minus
        const icon = qn.querySelector('.icon')

        // check if answer is already open
        const isOpen = answers.classList.contains('active')

        // close all answer
        document.querySelectorAll('.answer').forEach(function(ans){
            ans.classList.remove('active')
        })

        // reset the icons
        document.querySelectorAll('.icon').forEach(function(icons){
          icons.src= "./assets/images/icon-plus.svg"
        })

        // if clicked on

        if(!isOpen){
            answers.classList.add('active');
            icon.src="./assets/images/icon-minus.svg"
        }
    })
})