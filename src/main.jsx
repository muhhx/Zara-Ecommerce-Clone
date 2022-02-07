import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

//Contexts
import { NavigationProvider } from './Context/navigation'
import { CategoriesProvider } from './Context/categories'
import { CurrentCatalogProvider } from './Context/currentCatalog'
import { CurrentProductProvider } from './Context/currentProduct'
import { ProductsProvider } from './Context/products'
import { AlertProvider } from './Context/alert'
import { CartProvider } from './Context/cart'
import { AuthProvider } from './Context/auth'
import { DatabaseProvider } from './Context/database'
import { ConfirmationProvider } from './Context/confirmation'
import { EditProvider } from './Context/edit'

ReactDOM.render(
  <React.StrictMode>
    <DatabaseProvider>
      <AuthProvider>
        <AlertProvider>
          <EditProvider>
            <ConfirmationProvider>
              <CategoriesProvider>
                <CurrentCatalogProvider>
                  <CurrentProductProvider>
                    <ProductsProvider>
                      <CartProvider>
                        <NavigationProvider>
                          <App />
                        </NavigationProvider>
                      </CartProvider>
                    </ProductsProvider>
                  </CurrentProductProvider>
                </CurrentCatalogProvider>
              </CategoriesProvider>
            </ConfirmationProvider>
          </EditProvider>
        </AlertProvider>
      </AuthProvider>
    </DatabaseProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
