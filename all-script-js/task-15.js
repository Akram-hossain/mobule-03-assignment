async function sendPostRequest() {
    const url = "https://api.example.com/submit";
    const data = {
      name: "John Doe",
      email: "johndoe@example.com"
    };
  
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
  
      if (!res.ok) {
        throw new Error("Request failed. Status: " + res.status);
      }
  
      const responseData = await res.json();
      console.log(responseData); 
    } catch (error) {
      console.error("Request failed:", error); 
    }
  }
  