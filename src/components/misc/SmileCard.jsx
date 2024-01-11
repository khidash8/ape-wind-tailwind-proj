const SmileCard = ({ description, bgColor }) => {
  return (
    <div className="flex rounded-lg shadow-lg">
      <div
        className={`flex h-full w-1/5 items-center justify-center rounded-l-lg p-4 text-3xl ${bgColor}`}
      >
        😍
      </div>
      <div className="flex-grow rounded-r-lg bg-white p-4 text-left text-lg">
        {description}
      </div>
    </div>
  );
};

export default SmileCard;
