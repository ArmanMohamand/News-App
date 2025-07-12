import image from "../assets/News.jpg";
const NewsItem = ({ title, description, url, src }) => {
  return (
    <div className="w-80 bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden">
      <img
        src={src ? src : image}
        alt="News"
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h5 className="text-xl font-semibold mb-2 line-clamp-2">{title}</h5>
        <p className="text-sm text-gray-300 mb-4 line-clamp-3">
          {description
            ? description.slice(0, 90)
            : "It is infromation about something that just happpened."}
        </p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
