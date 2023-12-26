const QuantityCounter = ({ quantity, handleAdd, handleDelete }) => {
  return (
    <div className="flex items-center mx-2">
      <button
        className="p-2 bg-blue-950 text-white w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center"
        onClick={handleAdd}
      >
        +
      </button>
      <p className="p-2 w-8 h-8 sm:w-10 sm:h-10 text-center flex items-center justify-center">
        {quantity}
      </p>
      <button
        className="p-2 border border-gray-300  w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center"
        onClick={handleDelete}
      >
        -
      </button>
    </div>
  );
};

export default QuantityCounter;
