import './App.css';
import lake from "./image/lake.JPG";
import GallaryFooter from './components/GallaryFooter';
import Head from './components/Head';
import Content from './components/Content';
const imageData = [
  {
    id:1,
    img:lake 
  },
  {
    id:2,
    img:lake
  },
  {
    id:3,
    img:lake
  },
  {
    id:4,
    img:lake
  }
]

function App() {
  return (
    <>
   <Head/>
   <Content data ={imageData}/> 
   <GallaryFooter/> 
  </>
  )
}

export default App;
