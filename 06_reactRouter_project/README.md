### REACT_ROUTER_DOM

=> It's not the React essential core part, it's basically a third-party library

=> For install react-router-dom:

- npm install react-router-dom

### Link vs NavLink

=> Both are almost same but, more features/functionality are there in NavLink,
=> Link are basically used inplace of anchor tag <a></a> because the <a> refresh the whole page as the react doesnot have that concept instead uses DOM and changes value injected

=> attributes href --- to
=> In NavLink in the className uses callBack function i.e., also in the nav bar their was home, about, contact, product etc, as the callback function helps to detect the specified nav link / nav header, whenever navlink is uses their are access to variables such as isActive, isPending,

```javascript
<li>
  <NavLink
    className={({ isActive }) => {
      return `${isActive ? ""<true>:""<falase>} block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`;
    }}
  >
    Home
  </NavLink>
</li>
```
