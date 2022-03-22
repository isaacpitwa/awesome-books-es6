const getData = (localStorage) => {
    const formData = JSON.parse(localStorage.getItem('myBooks'));
    console.log("===> Printing local Storage ");
    console.log(formData);
    // if (formData == null) {
    // //   methods.books = [];
 
    // } else {
    //   methods.books = formData;
    // }
  };
export default { getData }