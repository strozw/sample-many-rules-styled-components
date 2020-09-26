# Many rules styled components Sample

This repository is for checking the behavior of styled components with many rules.

## Contain Apps

The following react app renders a CGS (createGlobalStyle) Comopnent with 3000 rules.
You can experience the improvement in operation speed by checking each operation with the perfomance tab of dev tools of chrome.

### `workspaces/normal` 

use recent styled-components v5 applications

### `workspaces/fixed-insert-rules`

Use [this branch](https://github.com/strozw/styled-components/tree/fix-insertRules-performance-in-TextTag) and use performance improved styled components about insert rules in development.

## How

1. `yarn`
2. `yarn start`
3. open 2 react app automaticaly
 * `workspaces/normal` open at `http://localhost:3000`.
 * `workspaces/fixed-insert-rules` open at `http://localhost:3100`.
