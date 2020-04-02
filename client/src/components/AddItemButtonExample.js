<Button
  color="dark"
  style={{marginBottom: '2rem'}}
  onClick={()=> {
    const name = prompt('Enter Item');
    if (name) {
      this.setState(state => ({
        items: [...state.items, { id: uuid(), name }]
      }));
    }
  }}  
>
  Add Item
</Button>