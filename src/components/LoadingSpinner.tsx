export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <img src="/loading.png" alt="Loading" className="w-32 h-32 animate-spin" />
    </div>
  );
} 