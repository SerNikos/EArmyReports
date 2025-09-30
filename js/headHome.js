const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => {
    console.log(data);
    data.forEach(user => {
      let mess =`Name: ${user.name}, Hours Requested: ${user.phone[2]} for: ${weekdays[Math.floor(Math.random() * weekdays.length)]}`;
      document.querySelector("#apiResponse").innerHTML += `<p>${mess}</p>`;
    });
  })
  .catch(err => console.error(err));