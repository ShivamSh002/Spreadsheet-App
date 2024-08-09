import React from 'react';
import Grid from './Grid';
import Search from './Search';

const Spreadsheet = () => {
  return (
    <div className="max-w-screen-lg mx-auto mt-8">
      <h1 className="text-2xl font-bold text-center mb-4">Spreadsheet Application</h1>
      <Search />
      <Grid />
    </div>
  );
};

export default Spreadsheet;
