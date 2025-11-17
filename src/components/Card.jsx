import React from "react";

const Card = ({
  name,
  productName,
  amount,
  nameColor,
  productColor,
  amountColor,
  bgColor = "#ffffff", 
}) => {
  return (
    <div
      className="card"
      style={{
        width: "12rem",               
        backgroundColor: bgColor,     
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        padding: "15px",             
        margin: "10px",
        minHeight: "auto",           
      }}
    >
      <div className="card-body">
        <h5 className="card-title" style={{ marginBottom: "10px" }}>My Goods</h5>
        <p className="card-text">
          <span className="label" style={{ color: "#6b4226", fontWeight: "bold" }}>Name:</span>{" "}
          <span className={nameColor}>{name}</span>
        </p>
        <p className="card-text">
          <span className="label" style={{ color: "#6b4226", fontWeight: "bold" }}>Product Name:</span>{" "}
          <span className={productColor}>{productName}</span>
        </p>
        <p className="card-text">
          <span className="label" style={{ color: "#6b4226", fontWeight: "bold" }}>Amount:</span>{" "}
          <span className={amountColor}>{amount}</span>
        </p>
      </div>
    </div>
  );
};

export default Card;





// import React from "react";

// const Card = ({name, productName, amount,nameColor, productColor, amountColor }) => {
//   return (
//     <>
//       <div>
//         <div className="card w-25" style={{ width: "18rem" }}>
//           <div className="card-body">
//             <h4 className="card-title">My Goods</h4>
//             <p className="card-text">
//                 <span className="label">Name:</span>{''}
//                 <span className={nameColor}>{name}</span>
//             </p>
//             <p className="card-text">
//                 <span className="label">productName:</span>{''}
//                 <span className={productColor}>{productName}</span>
//             </p>
//             <p className="card-text">
//                 <span className="label">amount:</span>{''}
//                 <span className={amountColor}>{amount}</span>
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Card;
