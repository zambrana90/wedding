interface WaveTransitionProps {
  active: boolean;
}

export function WaveTransition({ active }: WaveTransitionProps) {
  return (
    <div className={`wave-transition ${active ? "active" : ""}`}>
      <svg
        preserveAspectRatio="none"
        viewBox="0 0 1440 900"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "100%", display: "block" }}
      >
        <path
          d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,144C672,139,768,181,864,197.3C960,213,1056,203,1152,176C1248,149,1344,107,1392,85.3L1440,64L1440,900L0,900Z"
          fill="#eef5f9"
          fillOpacity="1"
        />
      </svg>
    </div>
  );
}
