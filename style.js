// get the element by id name
let totalJobs = document.getElementById('totalJobs')
let availableJobs = document.getElementById('availableJobs')
let allBtn = document.getElementById('allBtn')
let interviewBtn = document.getElementById('interviewBtn')
let rejectedBtn = document.getElementById('rejectedBtn')
let interviwedJobs = document.getElementById('interviwedJobs')
let rejectedJobs = document.getElementById('rejectedJobs')

// add total jobs available
totalJobs.innerText = availableJobs.children.length

// function to show which btns clicked of 3
function btnControll(id) {
    // remove class list
    allBtn.classList.remove('bg-blue-500', 'text-white')
    interviewBtn.classList.remove('bg-blue-500', 'text-white')
    rejectedBtn.classList.remove('bg-blue-500', 'text-white')

    // add class list
    const selected = document.getElementById(id)
    selected.classList.add('bg-blue-500', 'text-white')
}

// function to show jobs of each section 3 btns

function showJobs(id) {
    // hide other section's jobs
    availableJobs.classList.add('hidden')
    interviwedJobs.classList.add('hidden')
    rejectedJobs.classList.add('hidden')

    // show clicked section's jobs
    const selected = document.getElementById(id)
    selected.classList.remove('hidden')
}
const addInterviewedJobs = [];
const interviwedJobsDiv = document.getElementById('addNewIntJobs');
function renderIntJobsDiv() {
    interviwedJobsDiv.innerHTML = addInterviewedJobs.join('');
}

// function for main part btn functionality
document.querySelector('main').addEventListener('click', function (event) {
    if (event.target.classList.contains('intSelectBtn')) {
        const jobCard = event.target.parentNode.parentNode.parentNode.parentNode.parentNode;

        jobCard.querySelector('.statusBtn').innerHTML = `<button
                                        class="intSelectBtn btn btn-active text-green-500 border-2 border-green-500">INTERVIEW</button>`;

        const html = jobCard.innerHTML;
        if (!addInterviewedJobs.includes(html)) {
            addInterviewedJobs.push(html);
            renderIntJobsDiv();
        }
    }
})