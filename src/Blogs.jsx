import React, { useState } from 'react';

const blogsData = [
  // Example blog entries
  {
    id: 1,
    title: "Understanding React",
    description: "A brief overview of React and its core concepts.",
    content: "Detailed explanation about React...",
    videoUrl: "https://example.com/video.mp4",
    imageUrl: "https://example.com/image.jpg",
    references: ["https://reactjs.org", "https://developer.mozilla.org"],
  },
  // Add more blogs as needed
];

const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBlog, setSelectedBlog] = useState(null);

  const blogsPerPage = 10;

  const filteredBlogs = blogsData.filter(blog =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedBlogs = filteredBlogs.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage
  );

  const handleReadClick = (blog) => {
    setSelectedBlog(blog);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleShareClick = () => {
    if (navigator.share) {
      navigator.share({
        title: selectedBlog.title,
        text: selectedBlog.description,
        url: window.location.href + `#${selectedBlog.id}`,
      })
      .then(() => console.log('Blog shared successfully'))
      .catch((error) => console.error('Error sharing blog:', error));
    } else {
      alert('Sharing is not supported in this browser.');
    }
  };

  return (
    <div className="p-4">
      {selectedBlog ? (
        <div>
          <h2 className="text-2xl font-bold mb-4">{selectedBlog.title}</h2>
          <p className="mb-4">{selectedBlog.content}</p>
          {selectedBlog.videoUrl && (
            <video controls src={selectedBlog.videoUrl} className="my-4"></video>
          )}
          {selectedBlog.imageUrl && (
            <img src={selectedBlog.imageUrl} alt="Blog visual" className="my-4"/>
          )}
          <h3 className="text-xl font-semibold mb-2">References</h3>
          <ul className="mb-4">
            {selectedBlog.references.map((ref, index) => (
              <li key={index}>
                <a href={ref} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{ref}</a>
              </li>
            ))}
          </ul>
          <button
            className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
            onClick={() => setSelectedBlog(null)}
          >
            Back to Blogs
          </button>
          <button
            className="ml-2 mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
            onClick={handleShareClick}
          >
            Share
          </button>
        </div>
      ) : (
        <>
          <br />
          <br />
          {/* <br /> */}
          <input
            type="text"
            placeholder="Search blogs..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="border p-2 mb-8 w-full rounded" 
          />
          <div>
            {paginatedBlogs.map((blog) => (
              <div key={blog.id} className="mb-4 p-4 border rounded shadow">
                <h2 className="text-xl font-bold">{blog.title}</h2>
                <p>{blog.description}</p>
                <button
                  className="mt-2 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                  onClick={() => handleReadClick(blog)}
                >
                  Read
                </button>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center mt-4">
            <button
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
              className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400"
            >
              Previous
            </button>
            <span>Page {currentPage}</span>
            <button
              disabled={currentPage * blogsPerPage >= filteredBlogs.length}
              onClick={() => handlePageChange(currentPage + 1)}
              className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Blogs;
