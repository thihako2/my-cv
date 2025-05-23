import React from 'react';
import CV from './components/CV';
import CVData from './data/CVData';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8 px-4">
      <div className="mb-6 flex gap-4 w-full max-w-4xl">
        <button 
          onClick={() => CVData.exportToPDF()} 
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
        >
          Download as PDF
        </button>
        <button 
          onClick={() => CVData.exportToWord()} 
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
        >
          Download as DOCX
        </button>
      </div>
      <div id="cv-container" className="bg-white shadow-lg max-w-4xl w-full">
        <CV data={CVData} />
      </div>
    </div>
  );
}

export default App;