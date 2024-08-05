import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  const Navigate = useNavigate();

  const Middle1Clicked = () => {
    Navigate('/Perfume');
  };
  return (
    <div className="App">
      <div className="HomeTop_Image">
        럭셔리 & 아티스틱 브랜드, <br /> DIPTYQUE
      </div>
      <div className="HomeMiddle_Box">
        <div onClick={Middle1Clicked} className="Middle1">
          Fragrances
        </div>
        <div className="Middle2">Candles & Home</div>
        <div className="Middle3">Bath & Body</div>
        <div className="Middle4">Life Care</div>
      </div>
      <div className="HomeVideo">
        <iframe
          width="1120"
          height="630"
          src="https://www.youtube.com/embed/FuvWVqM3Fzg?si=G5--q76DqDjgkwDs&amp;start=5"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default App;
