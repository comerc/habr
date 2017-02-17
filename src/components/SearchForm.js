import React from 'react'

const SearchForm = () => (
  <form action="/search/#h" method="get" className="search-form" id="search-form">
    { /* Я вернулся братиш, после стольких лет разлуки:) */ }
    <button type="button" className="btn btn_navbar_search" id="search-form-btn">
      <svg className="icon-svg icon-svg_navbar-search" width={ 32 } height={ 32 } viewBox="0 0 32 32" aria-hidden="true" version="1.1" role="img">
        <path d="M21.416 13.21c0 4.6-3.65 8.34-8.14 8.34S5.11 17.81 5.11 13.21c0-4.632 3.65-8.373 8.167-8.373 4.488 0 8.14 3.772 8.14 8.372zm1.945 7.083c1.407-2.055 2.155-4.57 2.155-7.084C25.515 6.277 20.04.665 13.277.665S1.04 6.278 1.04 13.21c0 6.93 5.475 12.542 12.237 12.542 2.454 0 4.907-.797 6.942-2.208l7.6 7.79 3.14-3.22-7.6-7.82z"
        />
      </svg>
    </button>
    <label className="search-form__field-wrapper">
      <input type="text" name="q" className="search-form__field" id="search-form-field" placeholder="Поиск" tabIndex={ -1 } />
      <button type="button" className="btn btn_search-clear" id="search-form-clear">
        <svg className="icon-svg icon-svg_navbar-close-search" width={ 31 } height={ 32 } viewBox="0 0 31 32" aria-hidden="true" version="1.1"
          role="img">
          <path d="M26.67 0L15.217 11.448 3.77 0 0 3.77l11.447 11.45L0 26.666l3.77 3.77L15.218 18.99l11.45 11.448 3.772-3.77-11.448-11.45L30.44 3.772z" />
          </svg>
      </button>
    </label>
  </form>
)

export default SearchForm
