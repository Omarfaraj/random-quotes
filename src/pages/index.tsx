import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
   const [quotes, setQuotes] = useState([]);

  const fetchQuotes = async () => {
    try {
      const response = await axios.get('/api/fetchData2');
      setQuotes(response.data);
    } catch (error) {
      console.error('Error fetching quotes:', error);
    }
  };

  useEffect(() => {
    fetchQuotes(); // Fetch quotes when component mounts
  }, []);

  const handleRefreshClick = () => {
    fetchQuotes(); // Fetch quotes when button is clicked
  };

  return (
    
       <div className="container-fluid">
          <h1 className="h2 text-center my-5 text-primary fw-bold">Random Quotes</h1>
          <div className="row text-center" style={{ backgroundColor: 'lightgray', height: '300px', width: '900px', margin: '0 auto' }}>
             <ul className="list-group">
              {quotes.map((quote, index) => (
                <li className="list-group-item" style={{ color: '#1a1a34'}} 
                key={index}>{quote.quote}</li>  
              ))}
             </ul>
          </div>
           <div className="col text-center">
          {/* <button type="button" className="btn btn-primary my-5" onClick={handleRefreshClick}> */}
            {/* Refresh */}
          {/* </button> */}
       </div>
       </div>

    
  );
}

    // <div className="container-fluid">
    //       <h1 className="h2 text-center my-5 text-primary fw-bold">Welcome to Random Qoutes</h1>
    //       <div className="row text-center" style={{ backgroundColor: 'gray', height: '300px', width: '600px', margin: '0 auto' }}>
             
    //       </div>
    //        <div className="col text-center">
    //       <button type="button" className="btn btn-primary my-5" onClick={handleRefreshClick}>
    //         Refresh
    //       </button>
    //    </div>
    //    </div>
