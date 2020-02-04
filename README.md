# useMobileOnly
A small hook on Material-UI breakpoints

Simply it checks breakpoint with useMediaQuery hook and turn query result.

Basic usage
```javascript
import useMobileOnly from 'usemobileonly'

const TestComp = () => {
  const isMobileOnly = useMobileOnly()
  {isMobileOnly ? <p>Mobile Screen</p> : <span>Non-Mobile Screen</span>} 
}

```

If you don't want to add another lib to your work just check the source.
You can understand UI size changes just using the `useMediaQuery` hook of Material-UI.
