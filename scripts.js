const guests = document.querySelector("ul")



const newGuest = document.createElement("li")

newGuest.classList.add("guest")

const guestName = document.createElement("span")

guestName.textContent = "Marcos"

newGuest.append(guestName)

guests.append(newGuest)












