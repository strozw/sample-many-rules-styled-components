# Many rules styled components Sample

This repository is for checking the behavior of styled components with many rules.

## Contain Apps

The following react app renders a CGS (createGlobalStyle) Comopnent with 3000 rules.
You can see the difference in speed on the Performance tab of Chrome dev tools.

### `workspaces/normal` 

Use recent styled-components v5 applications

### `workspaces/fixed-insert-rules`

Use performance improved styled-components about insert rules at development.
This styled-components fix was made in [this branch](https://github.com/styled-components/styled-components/compare/master...strozw:fix-insertRules-performance-in-TextTag)

## How

1. `yarn`
2. `yarn start`
3. Two react app is displayed in Browser automatically
 * `workspaces/normal` is displayed in `http://localhost:3000`.
 * `workspaces/fixed-insert-rules` is displayed in `http://localhost:3100`.
