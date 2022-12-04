const btnBack = document.querySelector('#btnBack');
const btnNext = document.querySelector('#btnNext');

const oneComment = document.querySelector('#oneComment');
const twoComment = document.querySelector('#twoComment');
const threeComment = document.querySelector('#threeComment');
const fourComment = document.querySelector('#fourComment');

btnNext.addEventListener('click', () => {
    oneComment.classList.toggle("hidden");
    twoComment.classList.toggle("hidden");
    threeComment.classList.toggle("show");
    fourComment.classList.toggle("show");
})

btnBack.addEventListener('click', () => {
    oneComment.classList.toggle("hidden");
    twoComment.classList.toggle("hidden");
    threeComment.classList.toggle("show");
    fourComment.classList.toggle("show");
})