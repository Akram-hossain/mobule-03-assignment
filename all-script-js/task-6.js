
// 6.Geolocation : ==============================================
async function getMyLocation() {
    if ("geolocation" in navigator) { 
      try {
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              resolve(position);
            },
            (error) => {
              reject(error);
            }
          );
        });
  
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        return { latitude, longitude };
      } catch (error) {
        throw new Error("Error occurred while retrieving location: " + error);
      }
    } else { 
      throw new Error("Geolocation is not supported by your browser.");
    }
  }
  
  // Usage example:
  (async () => {
    try {
      const location = await getMyLocation();
      console.log("Latitude: " + location.latitude);
      console.log("Longitude: " + location.longitude);
    } catch (error) {
      console.log(error.message);
    }
  })();
  