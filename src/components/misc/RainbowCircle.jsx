const RainbowCircle = ({ className }) => {
  return (
    <div className={className}>
      <div className="to-purple- absolute ml-10 mt-10 h-64 w-64 rounded-full bg-gradient-to-r from-purple-100 to-purple-200 opacity-40"></div>
      <div className="to-teal- absolute h-64 w-64 rounded-full bg-gradient-to-r from-teal-100 to-teal-200 opacity-40"></div>

      <div className="absolute ml-24 h-64 w-64 rounded-full bg-gradient-to-r from-red-100 to-red-200 opacity-40"></div>
    </div>
  );
};

export default RainbowCircle;
