export const transformData = (usersData) => {
    const tabledataArray = [];
    let dataIndex = 1;
  
    for (const eachdata of usersData) {
      const newData = {};
  
      for (const property in eachdata) {
        newData['data' + dataIndex] = eachdata[property];
        dataIndex++;
      }
  
      tabledataArray.push(newData);
      dataIndex = 1; // Reset the counter for the next object
    }
  
    return tabledataArray;
  }
