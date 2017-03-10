import { generateReducer } from 'core/utils'
import * as actions from './action-types'
export * from './constants'
export * from './actions'
export * from './selectors'

/**
 * @overview Pagination module's initial state and reducer
 * @version 0.1.0
 * @author Aaron Contreras <aaron@redradix.com>
 */

const initialState = {}

function setPage(state, action) {
  const { domain, payload } = action
  const pages = state[domain] ? Object.assign({}, state[domain].pages, payload) :
                                payload
  return Object.assign({}, state, { [domain]: { ...state[domain], pages }})
}

function setPageNumber(state, action) {
  const { domain, payload } = action
  return Object.assign({}, state, { [domain]: { ...state[domain], pageNumber: payload }})
}

function setTotal(state, action) {
  const { domain, payload } = action
  return Object.assign({}, state, { [domain]: { ...state[domain], total: payload }})
}

const reducer = generateReducer({
  [actions.SET_PAGE]: setPage,
  [actions.SET_PAGE_NUMBER]: setPageNumber,
  [actions.SET_TOTAL]: setTotal
}, initialState)

export default reducer