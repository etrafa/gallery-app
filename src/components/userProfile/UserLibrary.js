const UserLibrary = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl justify-between gap-12 mx-auto my-12">
      <div className="w-80 h-80 border mx-auto rounded-xl flex items-center justify-center">
        <h2 className="text-center text-3xl ">
          Likes
          <span className="text-lg block">(25)</span>
        </h2>
      </div>
      <div className="w-80 h-80 border mx-auto rounded-xl flex items-center justify-center">
        <h2 className="text-center text-3xl">
          A<span className="text-lg block">(2)</span>
        </h2>
      </div>
      <div className="w-80 h-80 border mx-auto rounded-xl flex items-center justify-center">
        <h2 className="text-center text-3xl">B</h2>
      </div>
      <div className="w-80 h-80 border mx-auto rounded-xl flex items-center justify-center">
        <h2 className="text-center text-3xl">A</h2>
      </div>
      <div className="w-80 h-80 border mx-auto rounded-xl flex items-center justify-center">
        <h2 className="text-center text-3xl">A</h2>
      </div>
      <div className="w-80 h-80 border mx-auto rounded-xl flex items-center justify-center">
        <h2 className="text-center text-3xl">A</h2>
      </div>
      <div className="w-80 h-80 border mx-auto rounded-xl flex items-center justify-center">
        <h2 className="text-center text-3xl">A</h2>
      </div>
    </div>
  );
};

export default UserLibrary;
