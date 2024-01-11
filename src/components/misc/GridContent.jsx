const GridContent = ({ main, h3, p }) => {
  return (
    <div className={`rounded-lg border-2 border-gray-700 shadow-lg ${main}`}>
      <div className="flex items-center justify-between border-b-2 border-gray-800 bg-gray-500 p-4">
        <h3 className="  text-xl text-gray-100">{h3}</h3>

        {/* decorations */}
        <div className="flex space-x-2">
          <div className="h-3 w-3 rounded-full bg-red-600"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-600"></div>
          <div className="h-3 w-3 rounded-full bg-green-600"></div>
        </div>
      </div>
      <p className={`p-4 text-lg text-gray-900`}>{p}</p>
    </div>
  );
};

export default GridContent;
