import Header from "./Header";

import Content from "./Content";
import Footer from "./Footer";
import { useState } from "react";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";

function App() {
  const [items, setItems] = useState(
    localStorage.getItem("checklist")
      ? JSON.parse(localStorage.getItem("checklist"))
      : []
  );

  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");
  return (
    <div className="App">
      <Header title="체크 리스트" length={items.length} />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        items={items}
        setItems={setItems}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <Content
        items={items.filter((item) => item.item.includes(search))}
        setItems={setItems}
      />
      <Footer />
    </div>
  );
}

export default App;
