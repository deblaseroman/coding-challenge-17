import React, { useState, useEffect } from 'react';

const Gallery = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await fetch('https://course-api.com/react-tours-project');
        if (!response.ok) {
          throw new Error('Failed to fetch tours');
        }
        const data = await response.json();
        setTours(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div className="tour-list">
      {tours.map((tour) => (
        <div key={tour.id} className="tour-card">
          <img src={tour.image} alt={tour.name} />
          <h3>{tour.name}</h3>
          <p className="price">${tour.price}</p>
          <p className="description">
            {tour.showDescription ? tour.info : `${tour.info.slice(0, 100)}...`}
          </p>
          <button onClick={() => toggleDescription(tour.id)}>
            {tour.showDescription ? 'Show Less' : 'Read More'}
          </button>
          <button onClick={() => removeTour(tour.id)}>Not Interested</button>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
