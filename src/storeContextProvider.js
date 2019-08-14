import React, { PureComponent } from 'react'
import StoreContext from './StoreContext'


export default (store) => (ComposedComponent) =>

  class WrappedComponent extends PureComponent {

    static WrappedComponent = ComposedComponent

    static displayName = `storeContextProvider(${ComposedComponent.displayName || ComposedComponent.name})`

    static propTypes = ComposedComponent.propTypes

    render() {

      return (
        <StoreContext.Provider value={store}>
          <ComposedComponent {...this.props} />
        </StoreContext.Provider>
      )
    }
  }
