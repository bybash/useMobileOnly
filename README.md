# useMobileOnly
A small hook on Material-UI breakpoints


Basic usage
```javascript
import useMobileOnly from 'usemobileonly'

const TestComp = () => {
  const isMobileOnly = useMobileOnly()
  {isMobileOnly ? <p>Mobile Screen</p> : <span>Non-Mobile Screen</span>} 
}

```
