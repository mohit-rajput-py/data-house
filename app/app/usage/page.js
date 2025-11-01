import React from 'react';

const Page = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">How to Use This Website</h1>
      <p className="mb-3">
        Welcome! This website allows you to explore and download datasets easily.
        Follow these simple steps to get started:
      </p>

      <ol className="list-decimal list-inside space-y-2">
        <li>Go to the <strong>Dataset</strong> page to view all available categories.</li>
        <li>Select a category to browse its datasets.</li>
        <li>Click on any dataset to preview it or download the CSV file.</li>
        <li>Use the search bar to quickly find data you’re interested in.</li>
        <li>For developers, you can use our API endpoint to access data programmatically.</li>
      </ol>

      <p className="mt-6">
        If you face any issues or have suggestions, feel free to contact me 
        <strong><a target='_blank' href="https://github.com/mohit-rajput-py"> &copy;Mohit-Rajput-Py</a></strong>.
      </p>
    </div>
  );
};

export default Page;
