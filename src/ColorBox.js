
 export function ColorBox({ color }) {

  const styles = {
    backgroundColor: color,
    height: "35px",
    width: "315px",
    marginTop: "10px",
  };
  return (
    <div style={styles}></div>
  );
}


//  const double = (n) => n* 2;

//  const triple = (n) => n* 3;

//  export {ColorBox, double, triple} //named export

 //default import and export 
 
//  export default function ColorBox({ color }) {

//   const styles = {
//     backgroundColor: color,
//     height: "35px",
//     width: "315px",
//     marginTop: "10px",
//   };
//   return (
//     <div style={styles}></div>
//   );
// }