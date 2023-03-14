import React,{useNavigate} from "react";
import Layout from "./../components/Layout/Layout";
import { useSearch } from "../context/search";
import { useCart } from "../context/cart";
import toast from "react-hot-toast";

const Search = () => {
  // const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const [values, setValues] = useSearch();
  return (
    <Layout title={"Search results"}>
      <div className="container">
        <div className="text-center">
          <h1>Search Resuts</h1>
          <h6>
          
            { (values?.results.length < 1)
              ? "No Products Found"
              : `Found ${values?.results.length}`
            }
          </h6>
          <div className="d-flex flex-wrap mt-4">
            {values?.results.map((p) => (
              <div className="card m-2" style={{ width: "18rem" }}>
                <img
                  src={`https://fashion-fusion-backend.onrender.com/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                  style={{background:"#D3D3D3"}}
                />
                <div className="card-body">
                <h5  className="card-title">{p.name}</h5>
                  <div className="card-name-price">

                    <h5 className="card-title card-price-discount">
                      ${p.price}
                    </h5>
                    <h5 className="card-title card-price-original">
                    ${(p.price)*1.25}
                    </h5>
                  </div>
                  <p  className="card-text ">
                    {p.description.substring(0, 60)}...
                  </p>
                  <div className="card-name-price">
                   
                    <button
                      className="add-to-cart btn ms-1"
                      onClick={() => {
                        setCart([...cart, p]);
                        localStorage.setItem(
                          "cart",
                          JSON.stringify([...cart, p])
                        );
                        toast.success("Item Added to cart");
                      }}
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
