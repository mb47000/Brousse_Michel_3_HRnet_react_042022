import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
// globals css rules here
* {
}

#root {
}

.title {
    display: flex;
    align-items: center;
    justify-content: center;
}


.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

label {
    display: block;
    margin-top: 1rem;
    margin-bottom: 10px;
}

.address {
    margin-top: 10px;
    margin-bottom: 10px;
}
`

export default GlobalStyle
