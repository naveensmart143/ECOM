import React, { useContext, useEffect } from "react";
import { authContext } from "../../Contexts/AuthContext";
// import { useNavigate } from "react-router-dom";

// import { authContext } from "../../Contexts/AuthContext";
import FetchData from "./FetchData";

const Home = () => {
  const { productItems, addProductItems, token } = useContext(authContext);

  const fetchData = async () => {
    let requestBody = {
      query: `
      query{
        products{
          _id
          name
          image
          description
          price
          category
          count
        }
      }
      
      `,
    };

    const result = await fetch("http://localhost:5000/root", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    return result.json();
  };
  useEffect(() => {
    let mount = true;
    console.log("useEffect");
    fetchData().then((resData) => {
      if (mount) {
        addProductItems(resData.data.products);
      }
    });
    return () => {
      mount = false;
    };
  }, []);

  console.log(productItems);
  // let [renderObject, setRenderObject] = useState();
  return (
    <React.Fragment>
      {productItems && <FetchData objectData={productItems} />}
      {!productItems && <p>Loading....</p>}
    </React.Fragment>
  );
};
export default Home;
