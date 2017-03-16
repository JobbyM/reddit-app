import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
// import { selectSubreddit, fetchPosts } from './actions'
import { selectSubreddit, fetchPostsIfNeeded  } from './actions'
import rootReducer from './reducers'

const loggerMiddleware = createLogger()

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware, // 允许我们dispatch() 函数
    loggerMiddleware // 一个很便捷的middleware，用来打印action 日志
  )
)


store.dispatch(selectSubreddit('reactjs'))
// store.dispatch(fetchPosts('reactjs')).then(() =>
//   console.log(store.getState())
// )
store.dispatch(fetchPostsIfNeeded('reactjs')).then(() =>
  console.log(store.getState())
)
