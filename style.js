// get the element by id name
let addNewIntJobs = document.getElementById('addNewIntJobs');
let addNewRejectedJobs = document.getElementById('addNewRejectedJobs');
let noIntJob = document.querySelector('#interviwedJobs .text-center');
let noRejectedJob = document.querySelector('#rejectedJobs .text-center');
let totalJobs = document.getElementById('totalJobs')
let mainInterviewedJobs = document.getElementById('mainInterviewedJobs')
let mainRejectedJobs = document.getElementById('mainRejectedJobs')
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

let addInterviewedJobs = [];
let addRejectedJobs = [];

document.querySelector('main').addEventListener('click', function (event) {

    if (event.target.classList.contains('intSelectBtn')) {
        const jobCard = event.target.parentNode.parentNode.parentNode.parentNode.parentNode;
        const jobTitle = jobCard.querySelector('.jobTitle ').innerText;
        const jobRole = jobCard.querySelector('.jobRole ').innerText;
        const jobType = jobCard.querySelector('.jobType ').innerText;
        const statusBtn = jobCard.querySelector('.statusBtn ').innerText;
        const jobDescription = jobCard.querySelector('.jobDescription ').innerText;

        jobCard.querySelector('.statusBtn ').innerText = 'INTERVIEW'
        const cardInfo = {
            jobTitle,
            jobRole,
            jobType,
            statusBtn: 'INTERVIEW',
            jobDescription
        }
        const jobExist = addInterviewedJobs.find(item => item.jobTitle == cardInfo.jobTitle)

        if (!jobExist) {
            addInterviewedJobs.push(cardInfo)
        }
        addRejectedJobs = addRejectedJobs.filter(item => item.jobTitle != cardInfo.jobTitle)
        renderaddInterviewedJobs()
        renderaddRejectedJobs()


    }
    if (event.target.classList.contains('rejectMarkBtn')) {
        const jobCard = event.target.parentNode.parentNode.parentNode.parentNode.parentNode;
        const jobTitle = jobCard.querySelector('.jobTitle ').innerText;
        const jobRole = jobCard.querySelector('.jobRole ').innerText;
        const jobType = jobCard.querySelector('.jobType ').innerText;
        const statusBtn = jobCard.querySelector('.statusBtn ').innerText;
        const jobDescription = jobCard.querySelector('.jobDescription ').innerText;

        jobCard.querySelector('.statusBtn ').innerText = 'REJECTED'
        const cardInfo = {
            jobTitle,
            jobRole,
            jobType,
            statusBtn: 'REJECTED',
            jobDescription
        }
        const jobExist = addRejectedJobs.find(item => item.jobTitle == cardInfo.jobTitle)

        if (!jobExist) {
            addRejectedJobs.push(cardInfo)
        }
        addInterviewedJobs = addInterviewedJobs.filter(item => item.jobTitle != cardInfo.jobTitle)
        renderaddRejectedJobs()
        renderaddInterviewedJobs()

    }

})

function renderaddInterviewedJobs() {
    addNewIntJobs.innerHTML = '';

    if (addInterviewedJobs.length === 0) {
        noIntJob.classList.remove('hidden');
    } else {
        noIntJob.classList.add('hidden');

        for (let interviewedJob of addInterviewedJobs) {
            let div = document.createElement('div');
            div.className = 'space-y-15';
            div.innerHTML = `
        <div class="flex justify-between p-4 rounded hover:bg-gray-200">
          <div class="space-y-5 ">
            <h1 class="jobTitle font-bold mt-5">${interviewedJob.jobTitle}</h1>
            <p class="text-black/70 jobRole">${interviewedJob.jobRole}</p>
            <p class="text-black/70 jobType">${interviewedJob.jobType}</p>

            <div class="statusBtn">
              <button class="btn btn-active" disabled>${interviewedJob.statusBtn}</button>
            </div>

            <p class="text-black/70 jobDescription">${interviewedJob.jobDescription}</p>

            <div class="flex gap-2">
              <button class="intSelectBtn btn btn-active text-green-500 border-2 border-green-500">INTERVIEW</button>
              <button class="rejectMarkBtn btn btn-active text-red-500 border-2 border-red-500">REJECTED</button>
            </div>
          </div>
          <div>
            <a role="button" class="btn"><i class="fa-regular fa-trash-can"></i></a>
          </div>
        </div>
      `;
            addNewIntJobs.appendChild(div);
        }
    }

    mainInterviewedJobs.innerText = addInterviewedJobs.length;
}
function renderaddRejectedJobs() {
    addNewRejectedJobs.innerHTML = '';

    if (addRejectedJobs.length === 0) {
        noRejectedJob.classList.remove('hidden');
    } else {
        noRejectedJob.classList.add('hidden');

        for (let rejectedJob of addRejectedJobs) {
            let div = document.createElement('div');
            div.className = 'space-y-15';
            div.innerHTML = `
        <div class="flex justify-between p-4 rounded hover:bg-gray-200">
          <div class="space-y-5 ">
            <h1 class="jobTitle font-bold mt-5">${rejectedJob.jobTitle}</h1>
            <p class="text-black/70 jobRole">${rejectedJob.jobRole}</p>
            <p class="text-black/70 jobType">${rejectedJob.jobType}</p>

            <div class="statusBtn">
              <button class="btn btn-active" disabled>${rejectedJob.statusBtn}</button>
            </div>

            <p class="text-black/70 jobDescription">${rejectedJob.jobDescription}</p>

            <div class="flex gap-2">
              <button class="intSelectBtn btn btn-active text-green-500 border-2 border-green-500">INTERVIEW</button>
              <button class="rejectMarkBtn btn btn-active text-red-500 border-2 border-red-500">REJECTED</button>
            </div>
          </div>
          <div>
            <a role="button" class="btn"><i class="fa-regular fa-trash-can"></i></a>
          </div>
        </div>
      `;
            addNewRejectedJobs.appendChild(div);
        }
    }

    mainRejectedJobs.innerText = addRejectedJobs.length;
}
// add total interviewed jobs available
mainRejectedJobs.innerText = addRejectedJobs.length


// // Interviewed Job arry and render function
// let addInterviewedJobs = [];
// const interviwedJobsDiv = document.getElementById('addNewIntJobs');
// function renderIntJobsDiv() {
//     interviwedJobsDiv.innerHTML = addInterviewedJobs.join('');
// }

// // rejected job array and render function
// let addRejectedJobs = [];
// const rejectedJobsDiv = document.getElementById('addNewRejectedJobs');
// function renderRejectedJobsDiv() {
//     rejectedJobsDiv.innerHTML = addRejectedJobs.join('');
// }

// // function for main part btn functionality
// document.querySelector('main').addEventListener('click', function (event) {
//     // for Interviewed Btn
//     if (event.target.classList.contains('intSelectBtn')) {
//         let jobCard = event.target.parentNode.parentNode.parentNode.parentNode.parentNode;



//         let html = jobCard.innerHTML;
//         addRejectedJobs = addRejectedJobs.filter(item => item !== html);
//         renderRejectedJobsDiv();
//         jobCard.querySelector('.statusBtn').innerHTML = `<button
//                                         class="intSelectBtn btn btn-active text-green-500 border-2 border-green-500">INTERVIEW</button>`;
//         html = jobCard.innerHTML;
//         if (!addInterviewedJobs.includes(html)) {
//             addInterviewedJobs.push(html);
//             renderIntJobsDiv();
//         }

//     }
//     // for rejected Btn
//     if (event.target.classList.contains('rejectMarkBtn')) {
//         const jobCard = event.target.parentNode.parentNode.parentNode.parentNode.parentNode;

//         let html = jobCard.innerHTML;
//         addInterviewedJobs = addInterviewedJobs.filter(item => item !== html);
//         renderIntJobsDiv();

//         jobCard.querySelector('.statusBtn').innerHTML = `<button
//                                         class="rejectMarkBtn btn btn-active text-red-500 border-2 border-red-500">REJECTED</button>`;

//         html = jobCard.innerHTML;
//         if (!addRejectedJobs.includes(html)) {
//             addRejectedJobs.push(html);
//             renderRejectedJobsDiv();
//         }
//     }
// })