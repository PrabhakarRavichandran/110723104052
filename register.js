const data = {
    email: "rprabhakar40@jnn.edu.in",
    name: "Prabhakar R",
    mobileNo: "9042919792",
    githubUsername: "PrabhakarRavichandran",
    rollNo: "110723104052",
    accessCode: "WNMcqN"
}
fetch("http://4.224.186.213/evaluation-service/register", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data)
})
.then(res => res.json())
.then(data => {
  console.log(data);
})
.catch(err => {
  console.log(err);
});