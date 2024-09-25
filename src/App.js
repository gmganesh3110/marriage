import React, { useEffect, useState } from 'react';
import './App.css';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa'; // Icons for map and calendar
import coupleImage from './couple.png'; // Add your couple image path
import romanticMusic from './romantic_music.mp3'; // Add your romantic music file path

function App() {
  const [loading, setLoading] = useState(true);
  const googleMapsLink = "https://www.google.com/maps/dir//Arultharum+Kamatchi+Amman+Kovil,+Kirushnapuram,+Tamil+Nadu+638455";

  // Handle map click
  const handleMapClick = () => {
    alert("Opening location in Google Maps");
    window.open(googleMapsLink, '_blank');
  };

  // Handle adding event to calendar
  const handleAddToCalendar = (eventTitle, date) => {
    const calendarLink = `https://www.google.com/calendar/render?action=TEMPLATE&text=${eventTitle}&dates=${date}`;
    window.open(calendarLink, '_blank');
  };

  // Play romantic music when the page loads
  // useEffect(() => {
  //   const audio = new Audio(romanticMusic);
  //   audio.play();
  // }, []);

  useEffect(() => {
    const audio = new Audio(romanticMusic);

    // Attempt to play the audio on page load
    const playAudio = async () => {
      try {
        await audio.play();
        console.log('Audio is playing automatically');
      } catch (error) {
        console.error('Autoplay failed:', error);
      }
    };

    playAudio(); // Try to autoplay when component mounts
  }, []);

  // Pre-loader 3-second delay
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return (
      <div className="loading-animation">
        <h1>Loading the Big Day...</h1>
      </div>
    );
  }

  return (
    <div className="invitation">
      <div className="background-animation">
        {/* Confetti */}
        <div className="confetti confetti1"></div>
        <div className="confetti confetti2"></div>
      </div>

      <div className="content">
        <div className="header">
          <h1 className="title">You're Invited!</h1>
          <p className="names">Nandhini & Nithyaprakash</p>
        </div>

        {/* Couple's Image */}
        <div className="couple-image">
          <img src={coupleImage} alt="Couple" />
        </div>

        <div className="quote">
          <p>"Together is a beautiful place to be."</p>
        </div>

        <div className="details">
          <p className="invite-text">We are excited to invite you to our wedding celebration.</p>

          {/* Reception Date */}
          <p className="date-time">
          <FaCalendarAlt className="calendar-icon animated" onClick={() => handleAddToCalendar('Reception of Nandhini & Nithyaprakash', '20241020T180000/20241020T210000')} />
            Reception: October 20, 2024, 6:00 PM
          </p>

          {/* Marriage Date */}
          <p className="date-time animated" >
          <FaCalendarAlt className="calendar-icon animated" onClick={() => handleAddToCalendar('Marriage of Nandhini & Nithyaprakash', '20241021T050000/20241021T070000')} />
            Marriage: October 21, 2024, 5:00 AM
          </p>

          {/* Venue with Map Icon */}
          <p className="venue-link animated" onClick={handleMapClick}>
            <FaMapMarkerAlt className="map-icon" /> Arultharum Kamatchi Amman Kovil, Kirushnapuram (Click to View on Google Maps)
          </p>
        </div>

        <div className="footer">
          <p className="footer-text">We can't wait to celebrate with you!</p>
          <div className="hearts">&#9829; &#9829; &#9829;</div>
        </div>
      </div>
    </div>
  );
}

export default App;
