// WorkItem.js
import React, { useState } from 'react';

const WorkItem = ({ title, role, techstack, description, duties, siteUrl, images }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isImagePreviewOpen, setIsImagePreviewOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
  const openImagePreview = (image) => {
    setSelectedImage(image);
    setIsImagePreviewOpen(true);
  };
  const closeImagePreview = () => {
    setSelectedImage(null);
    setIsImagePreviewOpen(false);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex items-center mb-6">
      <div className="ml-6 flex-grow">
        <h3 className="text-xl font-bold mb-1">{title} <span role="img" aria-label="icon">🚀</span></h3>
        <p className="text-sm text-gray-500 mb-1">{role} | {techstack}</p>
        <p className="text-gray-700 mb-3">{description}</p>
        <ul className="list-disc list-inside text-gray-700 mb-3">
          {duties.map((duty, index) => (
            <li key={index}>{duty}</li>
          ))}
        </ul>
        <div className="flex items-center space-x-4">
          <a href={siteUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Repository</a>
          <button
            onClick={openModal}
            className="text-blue-500 underline"
          >
            See More
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
         <div className="bg-white rounded-lg p-6 max-w-2xl w-full h-3/4 overflow-y-auto relative">
           <button
             onClick={closeModal}
             className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
           >
             ✕
           </button>
           <h2 className="text-2xl font-bold mb-4">Gallery</h2>
           <p className="text-2xs font-bold mb-4">click to see full image</p>
           <div className="space-y-4">
             {images.map((image, index) => (
               <img
                 key={index}
                 src={image}
                 alt='idk'
                 className="w-full h-96 object-cover rounded-md"
                 onClick={() => openImagePreview(image)}
               />
            ))}
               {isImagePreviewOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-60">
                  <div className="relative">
                    <button
                      onClick={closeImagePreview}
                      className="absolute top-2 right-2 text-white hover:text-gray-300 text-3xl"
                    >
                      ✕
                    </button>
                    <img
                      src={selectedImage}
                      alt="Preview"
                      className="max-w-full max-h-screen rounded-lg"
                    />
                  </div>
                </div>
               )}
            </div>
          </div>
        </div>
        
      )}
    </div>
  );
};

export default WorkItem;
