const eventList = document.getElementById("eventList")
const addBtn = document.getElementById("addBtn")
const clearBtn = document.getElementById("clearBtn")
const demoText = document.getElementById("demoText")
const htmlBtn = document.getElementById("htmlBtn")
const textBtn = document.getElementById("textBtn")
const boldBtn = document.getElementById("boldBtn")

addBtn.addEventListener("click", () => {
  const title = document.getElementById("title").value.trim()
  const date = document.getElementById("date").value
  const category = document.getElementById("category").value
  const description = document.getElementById("description").value.trim()

  if (!title || !date) return

  createEventCard(title, date, category, description)

  document.getElementById("title").value = ""
  document.getElementById("date").value = ""
  document.getElementById("description").value = ""
})

clearBtn.addEventListener("click", () => {
  eventList.innerHTML = ""
})

document.getElementById("sampleBtn").addEventListener("click", () => {
  const samples = [
    ["Emifest", "2026-01-14", "Social", "Annual cultural fest"],
    ["Tech Conference", "2026-03-10", "Conference", "Industry experts meetup"],
    ["Team Sync", "2026-02-05", "Meeting", "Monthly planning discussion"]
  ]

  samples.forEach(e => {
    createEventCard(e[0], e[1], e[2], e[3])
  })
})

eventList.addEventListener("click", e => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove()
  }
})

function createEventCard(title, date, category, description) {
  const card = document.createElement("div")
  card.className = "event-card"

  const h3 = document.createElement("h3")
  h3.innerText = title

  const meta = document.createElement("p")
  meta.innerText = category + " | " + date

  const desc = document.createElement("p")
  desc.innerText = description

  const delBtn = document.createElement("button")
  delBtn.innerText = "✖"
  delBtn.className = "delete"

  card.append(h3, meta, desc, delBtn)
  eventList.appendChild(card)
}

htmlBtn.addEventListener("click", () => {
  alert(demoText.innerHTML)
})

textBtn.addEventListener("click", () => {
  alert(demoText.textContent)
})

boldBtn.addEventListener("click", () => {
  demoText.classList.toggle("bold")
})

