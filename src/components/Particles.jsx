export default function Particles({amount}) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(amount)].map((_, i) => (
        <div
          key={i}
          className="absolute w-0.5 h-1 rounded-full opacity-70"
          style={{
            backgroundColor: "var(--color-main)",
            left: `${Math.random() * 100}%`, 
            top: `${Math.random() * 100}%`,
            animation: `slow-drift ${
              15 + Math.random() * 20
            }s ease-in-out infinite`,
            animationDelay: `${Math.random() * 1}s`,
          }}
        />
      ))}
    </div>
  );
}
