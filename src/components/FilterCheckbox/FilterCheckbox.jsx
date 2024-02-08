import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <label className="checkbox__container">
      <div className="checkbox__input">
        <input type="checkbox" />
        <div className="checkbox__slider">
          <div className="checkbox__knob" />
        </div>
      </div>
      <span className="checkbox__name">Короткометражки</span>
    </label>

  );
}

export default FilterCheckbox;
