const data = {
  email: "rprabhakar40@jnn.edu.in",
  name: "Prabhakar R",
  rollNo: "110723104052",
  accessCode: "WNMcqN",
  clientID: "599d681a-ec8c-4fd9-961f-77550678d831",
  clientSecret: "uNeQEEjUsWwTZymE"
};

fetch("http://4.224.186.213/evaluation-service/auth", {
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