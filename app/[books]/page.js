// app/page.js (or pages/index.js if using the Pages Router)
async function getBooks() {
  const res = await fetch('https://read-663l.onrender.com/api/book');
  if (!res.ok) {
    throw new Error('Failed to fetch books');
  }
  const data = await res.json();
  console.log(data); // Log the fetched data here
  return data[0]; // Extract the first array of data
}

export default async function Page() {
  // Fetch books data
  const books = await getBooks();

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Book Library</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={book.profilePicture || '/default-profile.jpg'} // Use a default image if no profilePicture is provided
                alt={book.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {book.name}
                </h2>
                <p className="text-gray-600 text-sm mb-4">{book.email}</p>
                <p className="text-gray-700 text-base">{book.bio}</p>
              </div>
              <div className="px-6 py-4 bg-gray-50">
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
