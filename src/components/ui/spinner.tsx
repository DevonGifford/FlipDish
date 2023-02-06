export function LoadingSpinner() {
    return (
      <>
        <div className="flex flex-col justify-center items-center w-screen h-screen text-slate-400">
          {/* SPINNER */}
          <div
            className="inline-block h-6 w-6 animate-spin rounded-full border-8 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          ></div>
          {/* HEADING */}
          <span className="text-3xl font-bold pt-2">Loading...</span>
        </div>
      </>
    );
  }
  
  export default LoadingSpinner;
  