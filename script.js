// Job Data

let jobs = [
  {
    id: 1,
    company: "Mobile First Corp",
    position: "React Native Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$130k - $175k",
    description: "Build cross-platform mobile applications used worldwide.",
    status: "all"
  },
  {
    id: 2,
    company: "WebFlow Agency",
    position: "Web Designer",
    location: "Los Angeles",
    type: "Part-time",
    salary: "$80k - $120k",
    description: "Create modern web experiences for clients.",
    status: "all"
  },
  {
    id: 3,
    company: "TechNova",
    position: "Frontend Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$90k - $110k",
    description: "Develop responsive UI using JavaScript.",
    status: "all"
  },
  {
    id: 4,
    company: "Softvence",
    position: "UI Developer",
    location: "Dhaka",
    type: "Full-time",
    salary: "$40k - $60k",
    description: "Work with reusable UI components.",
    status: "all"
  },
  {
    id: 5,
    company: "CodeLab",
    position: "JavaScript Engineer",
    location: "Remote",
    type: "Contract",
    salary: "$70k - $95k",
    description: "Build scalable web applications.",
    status: "all"
  },
  {
    id: 6,
    company: "Pixel Studio",
    position: "UX Designer",
    location: "Berlin",
    type: "Full-time",
    salary: "$65k - $85k",
    description: "Improve user experience and product usability.",
    status: "all"
  },
  {
    id: 7,
    company: "CloudNet",
    position: "Frontend Intern",
    location: "Remote",
    type: "Internship",
    salary: "$20k",
    description: "Learn real-world frontend development.",
    status: "all"
  },
  {
    id: 8,
    company: "NextGen IT",
    position: "React Developer",
    location: "Canada",
    type: "Full-time",
    salary: "$100k",
    description: "Develop scalable React applications.",
    status: "all"
  }
];

let currentTab = "all";

const container = document.getElementById("jobContainer");
const emptyState = document.getElementById("emptyState");

// Status Badge

function getStatusBadge(status) {

  if (status === "interview") {
    return `<span class="bg-green-100 text-green-600 px-2 py-1 text-xs rounded">
              INTERVIEW
            </span>`;
  }

  if (status === "rejected") {
    return `<span class="bg-red-100 text-red-500 px-2 py-1 text-xs rounded">
              REJECTED
            </span>`;
  }

  return `<span class="bg-blue-100 text-blue-600 px-2 py-1 text-xs rounded">
            NOT APPLIED
          </span>`;
}

// Render Jobs

function renderJobs() {

  container.innerHTML = "";

  let filtered =
    currentTab === "all"
      ? jobs
      : jobs.filter(job => job.status === currentTab);

  document.getElementById("tabJobCount").innerText =
    filtered.length + " jobs";

  if (filtered.length === 0) {
    emptyState.classList.remove("hidden");
  } else {
    emptyState.classList.add("hidden");
  }

  filtered.forEach(job => {

    const card = document.createElement("div");

    card.className =
      "border p-4 rounded flex flex-col md:flex-row justify-between";

    card.innerHTML = `
      <div>
        <h3 class="font-bold">${job.company}</h3>
        <p>${job.position}</p>

        <div class="mt-1">
          ${getStatusBadge(job.status)}
        </div>

        <p class="text-sm text-gray-500 mt-1">
          ${job.location} • ${job.type} • ${job.salary}
        </p>

        <p class="text-sm mt-2">${job.description}</p>

        <div class="mt-3 flex gap-2">
          <button onclick="setInterview(${job.id})"
            class="bg-green-500 text-white px-3 py-1 rounded">
            Interview
          </button>

          <button onclick="setRejected(${job.id})"
            class="border border-red-500 text-red-500 px-3 py-1 rounded">
            Rejected
          </button>
        </div>
      </div>

      <button onclick="deleteJob(${job.id})"
        class="text-gray-400 text-xl">🗑</button>
    `;

    container.appendChild(card);
  });

  updateDashboard();
}

// Status Change

function setInterview(id) {
  jobs.find(j => j.id === id).status = "interview";
  renderJobs();
}

function setRejected(id) {
  jobs.find(j => j.id === id).status = "rejected";
  renderJobs();
}

// Delete Job


function deleteJob(id) {
  jobs = jobs.filter(j => j.id !== id);
  renderJobs();
}

// Dashboard Update

function updateDashboard() {

  document.getElementById("totalCount").innerText =
    jobs.length;

  document.getElementById("interviewCount").innerText =
    jobs.filter(j => j.status === "interview").length;

  document.getElementById("rejectedCount").innerText =
    jobs.filter(j => j.status === "rejected").length;
}

// Tabs Active System

const tabButtons = document.querySelectorAll(".tabBtn");

tabButtons.forEach(button => {

  button.addEventListener("click", function () {

    currentTab = this.dataset.tab;

    tabButtons.forEach(btn => {
      btn.classList.remove("bg-blue-500","text-white");
      btn.classList.add("bg-gray-200");
    });

    this.classList.remove("bg-gray-200");
    this.classList.add("bg-blue-500","text-white");

    renderJobs();
  });

});

renderJobs();