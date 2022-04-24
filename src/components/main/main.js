import React from "react";
import Header from '../header';
import DateSelection from './dateSelection';
import Footer from '../footer';

function parseDate(date = new Date()) {
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()

  if (month < 10){
    return `${year}-0${month}-${day}`;
  }

  return `${year}-${month}-${day}`;
}

function Main() {
  const [date, setDate] = React.useState(parseDate());
  const [image, setImage] = React.useState({});

  React.useEffect(() => {
    async function fetchImage() {
        const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=9EzH6lZbenXDdtdPawEJVGNJ6nToY1PLueewH6GT');
        const imageData = await response.json();

        setImage(imageData);
    }

    fetchImage();
  }, []);

  return (
      <React.Fragment>
        <Header />
        <DateSelection />
        <Footer />
      </React.Fragment>
  );
};

export default Main;