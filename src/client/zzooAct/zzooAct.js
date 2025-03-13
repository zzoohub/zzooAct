import App from '../App.js'

const zzooAct = () => {
  const states = new Map()
  let currentIndex = 0

  const useState = defaultValue => {
    const index = currentIndex
    if (!states.get(index) && defaultValue) states.set(index, defaultValue)

    const setState = data => {
      const prev = states.get(index)
      if (typeof data === 'function') {
        states.set(index, data(prev))
        return render()
      }
      states.set(index, data)
      render()
    }

    const state = states.get(index)
    currentIndex++
    return [state, setState]
  }

  const render = () => {
    document.getElementById('app').innerHTML = App()
    currentIndex = 0
  }

  return { useState, render }
}

export default zzooAct()
