import { useState } from 'react'
import HeaderComponent from './assets/component/header/index.jsx'
import Block1 from './assets/component/block1/index.jsx';
import Block2 from './assets/component/block2/index.jsx';
import Block3 from './assets/component/block3/index.jsx';
import Block4 from './assets/component/block4/index.jsx';
import Block5 from './assets/component/block5/index.jsx';
import Block6 from './assets/component/block6/index.jsx';
import Block7 from './assets/component/block7/index.jsx';
import Block8 from './assets/component/block8/index.jsx';
import Block9 from './assets/component/block9/index.jsx';
import Block10 from './assets/component/block10/index.jsx';
import FooterComponent from './assets/Component/Footer/index.jsx'


function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <HeaderComponent></HeaderComponent>
      <Block1></Block1>
      <Block2></Block2>
      <Block3></Block3>
      <Block4></Block4>
      <Block5></Block5>
      <Block6></Block6>
      <Block7></Block7>
      <Block8></Block8>
      <Block9></Block9>
      <Block10></Block10>
      <FooterComponent></FooterComponent>
    </div>
  )
}

export default App
