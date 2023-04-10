function Loader() {
  return (
    <>
      <div className="fixed inset-0 h-screen w-screen backdrop-blur-sm z-[9998]"></div>
      <img
        className="fixed inset-0 m-auto mix-blend-multiply z-[9999]"
        src="/img/loader.gif"
        alt="Loading..."
      />
    </>
  );
}

export default Loader;
