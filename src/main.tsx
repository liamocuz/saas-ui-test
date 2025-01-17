import { SaasProvider, theme } from '@saas-ui/react'
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