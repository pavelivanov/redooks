import React from 'react'
import useConnect from './useConnect'


export default (propsMap) => (ComposedComponent) => {
  const WrappedComponent = (props) => {
    const state = useConnect(propsMap)

    return (
      <ComposedComponent {...state} {...props} />
    )
  }

  WrappedComponent.WrappedComponent = ComposedComponent
  WrappedComponent.displayName = `useConnect(${ComposedComponent.displayName || ComposedComponent.name})`
  WrappedComponent.propTypes = ComposedComponent.propTypes

  return WrappedComponent
}
