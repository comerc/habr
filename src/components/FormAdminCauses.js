import React from 'react'

const FormAdminCauses = ({ userNick, postId }) => (
  <form action={`/conversations/${userNick}/`} method="GET" className="form form_admin-causes hidden" id="admin_causes">
    <input type="hidden" name="moderation" defaultValue={postId} />
    <fieldset className="form__fieldset form__fieldset_admin-causes">
      <legend className="form__legend">Выберите рекомендации для отправки автору:</legend>
      <label className="form__label form__label_block">
        <input type="checkbox" className="form__input form__input_checkbox" name="id[]" defaultValue={ 1 } />
        <span className="form__label-text">Указан только блог</span>
      </label>
      <label className="form__label form__label_block">
        <input type="checkbox" className="form__input form__input_checkbox" name="id[]" defaultValue={ 2 } />
        <span className="form__label-text">Орфографические ошибки</span>
      </label>
      <label className="form__label form__label_block">
        <input type="checkbox" className="form__input form__input_checkbox" name="id[]" defaultValue={ 3 } />
        <span className="form__label-text">Пунктуационные ошибки</span>
      </label>
      <label className="form__label form__label_block">
        <input type="checkbox" className="form__input form__input_checkbox" name="id[]" defaultValue={ 4 } />
        <span className="form__label-text">Отступы</span>
      </label>
      <label className="form__label form__label_block">
        <input type="checkbox" className="form__input form__input_checkbox" name="id[]" defaultValue={ 5 } />
        <span className="form__label-text">Текст-простыня</span>
      </label>
      <label className="form__label form__label_block">
        <input type="checkbox" className="form__input form__input_checkbox" name="id[]" defaultValue={ 6 } />
        <span className="form__label-text">Короткие предложения</span>
      </label>
      <label className="form__label form__label_block">
        <input type="checkbox" className="form__input form__input_checkbox" name="id[]" defaultValue={ 7 } />
        <span className="form__label-text">Смайлики</span>
      </label>
      <label className="form__label form__label_block">
        <input type="checkbox" className="form__input form__input_checkbox" name="id[]" defaultValue={ 8 } />
        <span className="form__label-text">Много форматирования</span>
      </label>
      <label className="form__label form__label_block">
        <input type="checkbox" className="form__input form__input_checkbox" name="id[]" defaultValue={ 9 } />
        <span className="form__label-text">Картинки</span>
      </label>
      <label className="form__label form__label_block">
        <input type="checkbox" className="form__input form__input_checkbox" name="id[]" defaultValue={ 10 } />
        <span className="form__label-text">Ссылки</span>
      </label>
    </fieldset>
    <button type="submit" className="btn btn_medium btn_grey">Отправить</button>
  </form>
)

export default FormAdminCauses
