async function sendApiReq() {
    try {
        const res = await fetch("https://api.example.com/data");

        if (!res.ok) {
            throw new Error("Request failed.");
        }

        const data = await res.json();
        console.log(data); // console output
    } catch (error) {
        console.error(error);
    }
}
