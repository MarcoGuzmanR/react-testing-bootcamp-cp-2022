import React from "react";
import Header from '../header';
import DateSelection from './dateSelection';
import ImageContainer from './imageContainer';
import InfoContainer from './infoContainer';
import Footer from '../footer';

import { parseDate } from '../../utils/parseDate';
import { fetchImage } from '../../utils/fetchImage';

function Main() {
  const [date, setDate] = React.useState(parseDate());
  const [image, setImage] = React.useState({});
  const [error, setError] = React.useState();

  async function getImage(date) {
    const response = await fetchImage(date);

    try {
      if (!response.ok) {
        setError(await response.json());

        return;
      }

      setError(null);
      setImage(await response.json());
    }
    catch (error) {
      setError(error);
    }
  }

  function handleOnChange(e) {
    setDate(e.target.value);
  }

  function handleOnClick() {
    getImage(date);
  }

  React.useEffect(() => {
    getImage();
  }, []);

  function renderMainContent(){
    if (error) {
      return (
        <React.Fragment>
          <p>{error.msg}</p>
        </React.Fragment>
      );
    }

    return (
      <div className="main--container">
        <ImageContainer
          date={image.date}
          imageUrl={image.url}
          title={image.title}
        />
        <InfoContainer explanation={image.explanation} />
      </div>
    );
  }

  return (
      <React.Fragment>
        <Header />
        <DateSelection handleOnChange={handleOnChange} handleOnClick={handleOnClick} />
        {renderMainContent()}
        <Footer />
      </React.Fragment>
  );
};

export default Main;