import { createGlobalStyle } from 'styled-components-fixed-insert-rules'
import { createManyRules } from 'utils/ruleGenerator'

export const GlobalStyle = createGlobalStyle`
  ${createManyRules(3000)}
`
