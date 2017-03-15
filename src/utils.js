import memoize from 'lodash.memoize'

export const ga = (eventCategory, eventAction, eventLabel) => memoize(() => {
  if (typeof window.ga === 'function') {
    window.ga('send', 'event', eventCategory, eventAction, eventLabel)
  }
})

export const plural = (value, form1, form2, form3) => {
  // TODO реализовать plural
  return value
}

export const urlencode = (s) => {
  // TODO реализовать urlencode
  return 'dummy'
}

export const formatDateTime = (dateTime) => {
  // TODO реализовать formatDateTime
  return dateTime + ''
}
