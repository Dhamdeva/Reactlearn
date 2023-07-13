
import {  useLocation, useNavigate } from 'react-router-dom';

function Hist  ()  {
    const navigate = useNavigate();

    const location =useLocation();

    

    const handleClick = () => {
    
        navigate('/table');
    };

  return (
    <div>
      <p>Pathname: {location.pathname}</p>
      <p>href: {location.href}</p>
      <p>Hash: {location.hash}</p>
      <button onClick={handleClick}>Go to Other Route</button>
      <button onClick={() => navigate(-1)}>Go to Other Route</button>
      <button onClick={() => navigate(1)}>Go to Other Route</button>
      {/* <a href="/staticdesign">k</a> */}
    </div>
  );
};

export default Hist;
