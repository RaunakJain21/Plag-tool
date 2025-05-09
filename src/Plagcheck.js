import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const validCodes = ['ABC123', 'BOOK2024', 'PLAGFREE101'];

function PlagCheck() {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validCodes.includes(code.trim().toUpperCase())) {
      navigate('/plag');
    } else {
      setError('Unauthorized code. Please try again with a valid code.');
    }
  };

  return (
    <div className='min-h-screen flex flex-col bg-gray-800 text-white'>
      {/* <Navbar /> */}

      <div className='flex-grow flex items-center justify-center px-4'>
        <div className='bg-white text-gray-800 w-full max-w-md p-8 rounded-lg shadow-lg text-center'>
          <h1 className='text-3xl font-bold mb-6'>Enter Book Code</h1>

          <form onSubmit={handleSubmit} className='space-y-4'>
            <input
              type='text'
              placeholder='Enter Unique Book Code'
              className='w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
              value={code}
              onChange={(e) => {
                setCode(e.target.value);
                setError('');
              }}
              required
            />

            {error && (
              <div className='text-red-600 text-sm'>{error}</div>
            )}

            <button
              type='submit'
              className='w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded shadow-md transition'
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default PlagCheck;
