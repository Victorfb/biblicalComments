import { translate, I18nLocal } from '~/locales';
import books from './data';

function validadeBookBible(bookBible) {
  return books.find((item) => item.name === bookBible);
}

export function validateForm(values) {
  const errors = {};
  if (!values.name) {
    errors.name = translate(I18nLocal.REQUIRED_FIELD);
  }

  if (!values.book_bible) {
    errors.book_bible = translate(I18nLocal.REQUIRED_FIELD);
  } else if (!validadeBookBible(values.book_bible)) {
    errors.book_bible = translate(I18nLocal.NAME_NO_MATCH);
  }

  if (values.chapter) {
    if (!Number.isInteger(parseInt(values.chapter, 10))) {
      errors.chapter = translate(I18nLocal.ENTER_AN_INTEGER);
    }
  }

  if (values.verse) {
    if (!Number.isInteger(parseInt(values.verse, 10))) {
      errors.verse = translate(I18nLocal.ENTER_AN_INTEGER);
    }
  }

  if (!values.comment) {
    errors.comment = translate(I18nLocal.REQUIRED_FIELD);
  }

  return errors;
}
