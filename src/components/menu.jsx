import HackerEffectMenuItem from './hackerEffect'

export default function Menu({ isVisible, onClose }) {
  return (
    <div className={`menu-overlay ${isVisible ? "show" : ""}`} onClick={onClose}>
      <div className="menu-content" onClick={(e) => e.stopPropagation()}>
        <HackerEffectMenuItem targetText="Home" onClose={onClose} />
        <HackerEffectMenuItem targetText="About" onClose={onClose} />
        <HackerEffectMenuItem targetText="Contact" onClose={onClose} />
      </div>
    </div>
  );
}
