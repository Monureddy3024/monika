import React from "react";
import { Card, Button } from "antd";

const AssignmentThree = props => {
  const arrs = {
    cars: ["Saab", "Volvo", "BMW", "Mercedes"],
    fruits: ["Apple", "Orange", "Mango", "Banana", "Guava"]
  }

  const [selectedClient,setSelectedClient] = React.useState('cars');
  const [sortOrder, setSortOrder] = React.useState('asc');

  function handleSelectChange(event) {
    setSelectedClient(event.target.value);
    setList( lists( event.target.value ) );
  }

  function lists( value, sortMe ) {
    if( sortMe == 'asc' ) {
      arrs[value].sort();
    } else if( sortMe == 'desc' ) {
      arrs[value].reverse();
    }

    const listItems = arrs[value].map((item, idx) =>
      <li key={idx}>{item}</li>
    );

    return listItems;
  }

  const [list,setList] = React.useState(lists(selectedClient));

  const sort = ()=>{
    const order = sortOrder == 'asc'?'desc':'asc';
    setSortOrder( order );
    const listsorted = lists( selectedClient, order );
    setList( listsorted );
  }

  return (
  <Card
      bordered={false}
      style={{
        border: "1px solid #dcdcdc",
        boxShadow: "0px 15px 20px 5px #0000001a",
        width: 400
      }}
    >
      <div>
        <select value={selectedClient} onChange={handleSelectChange}> //set value here
            <option value="cars">Cars</option>
            <option value="fruits">Fruits</option>
        </select>

        <ul>
          {list}
        </ul>
      </div>
      <Button block size="large" onClick={sort}>
          Sort
      </Button>
    </Card>
  );
};

export default AssignmentThree;
