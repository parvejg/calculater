import "./CalculaterPage.css";
export const Calculater = () => {
  return (
    <div className="main-container">
      <div className="calculater-wrapper">
        <input type="text" className="calculter-input" />
        <div className="calculater-btn-wrapper">
          <button className="calculater-btns">AC</button>
          <button className="calculater-btns">+/-</button>
          <button className="calculater-btns">%</button>
          <button className="r-side-btn">/</button>
        </div>
        <div className="calculater-btn-wrapper">
          <button className="calculater-btns">7</button>
          <button className="calculater-btns">8</button>
          <button className="calculater-btns">9</button>
          <button className="r-side-btn">×</button>
        </div>
        <div className="calculater-btn-wrapper">
          <button className="calculater-btns">4</button>
          <button className="calculater-btns">5</button>
          <button className="calculater-btns">6</button>
          <button className="r-side-btn">−</button>
        </div>
        <div className="calculater-btn-wrapper">
          <button className="calculater-btns">1</button>
          <button className="calculater-btns">2</button>
          <button className="calculater-btns">3</button>
          <button className="r-side-btn">+</button>
        </div>
        <div className="calculater-btn-wrapper">
          <button className="calculater-zero-btn">0</button>
          <button className="calculater-btns">.</button>
          <button className="r-side-btn">=</button>
        </div>
      </div>
    </div>
  );
};
