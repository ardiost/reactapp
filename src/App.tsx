import ListGroup from "./components/ListGroup";
function App (){
  let items = ["Isfahan", "Kish", "Shiraz", "Qeshm", "Mashhad"];
  const handleSelectItem = (item:string)=>console.log(item);
  
  return <div><ListGroup items={items} heading="Cities" onSelectedItem={handleSelectItem}/></div>;
}


export default App;