const Loader = () => {
  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 mx-auto rounded-full gradient-hero animate-pulse-soft shadow-soft" />
        <p className="text-lg font-medium text-muted-foreground animate-pulse">
          Respirez...
        </p>
      </div>
    </div>
  );
};

export default Loader;
