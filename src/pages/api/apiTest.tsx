
import { useEffect, useState } from 'react';

export default function TestApi() {
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/api');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setResponseData(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const handleRefreshClick = () => {
      fetchData();
  };

  return (
    <div className="container-fluid">
      <h1 className="h2 text-center my-5 text-primary fw-bold">Welcome to Random Quotes</h1>
      <div className="row text-center" style={{ backgroundColor: 'gray', height: '150px', width: '900px', margin: '0 auto' }}>
        {responseData ? (
          <div>
            <h2>Data received:</h2>
            <pre>{JSON.stringify(responseData, null, 2)}</pre>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className="col text-center">
        <button type="button" className="btn btn-primary my-5" onClick={handleRefreshClick}>
          Refresh
        </button>
      </div>
    </div>
  );
}



function fetchData() {
  throw new Error('Function not implemented.');
}
  