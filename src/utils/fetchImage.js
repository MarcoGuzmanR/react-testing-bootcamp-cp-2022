export async function fetchImage(date) {
  const dateParam = date ? `&date=${date}` : '';

  try {
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=9EzH6lZbenXDdtdPawEJVGNJ6nToY1PLueewH6GT${dateParam}`);

    return response;
  }

  catch(error) {
    return error;
  }
}