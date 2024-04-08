export function IndeterminateProgress() {
  return (
    <div className="w-full">
      <div className="h-1.5 w-full bg-light-green overflow-hidden">
        <div className="animate-progress w-full h-full bg-green origin-left-right"></div>
      </div>
    </div>
  );
}
