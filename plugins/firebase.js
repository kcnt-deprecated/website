import firebase from 'firebase/app'

import 'firebase/firestore'
import 'firebase/database'

export default ({ env }, inject) => {
  const isProd = env === 'production'

  if (!firebase.apps.length) {
    firebase.initializeApp({
      apiKey: 'AIzaSyCGkRHeIBK3knuEUxifoNKzSAqes03Lu3M',
      authDomain: 'kcnt-info.firebaseapp.com',
      databaseURL: 'https://kcnt-info.firebaseio.com',
      projectId: 'kcnt-info',
      storageBucket: 'kcnt-info.appspot.com',
      messagingSenderId: '708261789427'
    })
  }

  const fireStore = firebase.firestore()
  inject('fireStore', fireStore)

  const fireDb = firebase.database()
  inject('fireDb', fireDb)
}
