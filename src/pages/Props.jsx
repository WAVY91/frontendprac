import React from "react";
import Card from "../components/Card";

const Props = () => {
  return (
    <div className="props-container">
      <Card
        name="Cena"
        productName="Iphone 17pro max"
        amount="$2000"
        nameColor="text-danger"
        productColor="text-warning"
        amountColor="text-success"
        bgColor="#ffe6e6"
      />
      <Card
        name="Nene"
        productName="Samsung S25 Ultra"
        amount="$1500"
        nameColor="text-primary"
        productColor="text-info"
        amountColor="text-danger"
        bgColor="#e6f7ff"
      />
      <Card
        name="Tomi"
        productName="Google Pixel S9"
        amount="$1000"
        nameColor="text-success"
        productColor="text-primary"
        amountColor="text-warning"
        bgColor="#e6ffe6"
      />
    </div>
  );
};

export default Props;




// import React from 'react'
// import Card from '../components/Card'

// const Props = () => {
//   return (
//     <>
//     <div>
//         <Card name='Cena' productName='Iphone 17pro max' amount='$2000' nameColor='text-danger'
//         productColor='text-warning'
//         amountColor='text-success'/>
//         <Card name='Nene'  productName='Samsung S25 Ultra' amount='$1500' nameColor='text-primary'
//         productColor='text-info'
//         amountColor='text-danger'/>
//         <Card name='Tomi' productName='Google Pixel S9' amount='$1000' nameColor='text-success'
//         productColor='text-primary'
//         amountColor='text-warning'/>
//         {/* <Card/> */}
//     </div>
//     </>
//   )
// }

// export default Props