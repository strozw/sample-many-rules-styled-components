import { createGlobalStyle } from 'styled-components-fixed-insert-rules'

const rules = Array.from(Array(3000).keys())
	 .map(n => `.fs${n} { font-size: ${n}px; }`)
	 .join("\n")

export const GlobalStyle = createGlobalStyle`
	 ${rules}
`
