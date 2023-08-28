export const FetchLink = async (link) => {
    const URL = `https://api.shrtco.de/v2/shorten?url=${link}`;
    try {
      const response = await fetch(URL);
      if (response.ok) {
        console.log(response)
        const data = await response.json();
        console.log(data);
        return data;
      } else {
        console.error(
          `Error en la solicitud: ${response.status} ${response.statusText}`
        );
        return null;
      }
    } catch (error) {
      console.error("Ocurrió un error:", error);
    }
  };