import { SaasProvider } from '@saas-ui/react'
import { theme } from '@saas-ui-pro/react'
import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom/client'
import App from './App'

const rootElement = document.getElementById('root')!;
ReactDOM.createRoot(rootElement).render(
  <StrictMode>
    <SaasProvider theme={theme}>
      <App />
    </SaasProvider>
  </StrictMode>
)