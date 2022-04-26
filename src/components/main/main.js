import React from "react";
import Header from '../header';
import DateSelection from './dateSelection';
import ImageContainer from './imageContainer';
import InfoContainer from './infoContainer';
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

  function handleOnChange(e) {
    setDate(e.target.value);
  }

  async function handleOnClick() {
      const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=9EzH6lZbenXDdtdPawEJVGNJ6nToY1PLueewH6GT&date=${date}`);
      const imageData = await response.json();

      setImage(imageData);
  }

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
        <DateSelection handleOnChange={handleOnChange} handleOnClick={handleOnClick} />
        <ImageContainer
          date={image.date}
          imageUrl={image.url}
          title={image.title}
        />
        <InfoContainer explanation={image.explanation} />
        <Footer />
      </React.Fragment>
  );
};

export default Main;