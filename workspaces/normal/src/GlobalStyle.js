import { createGlobalStyle } from 'styled-components'
import { createManyRules } from 'utils/ruleGenerator'

export const GlobalStyle = createGlobalStyle`
  ${createManyRules(3000)}
`
