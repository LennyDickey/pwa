import React from "react";
import "./styles.css";
// import './products.json'

export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      products: []
    };
  }

  componentDidMount() {
    fetch("/product")
      .then(res => res.json())
      .then(
        data => {
          console.log("data.products - ", data);
          this.setState({
            isLoaded: true,
            products: data
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, products } = this.state;
    const searchProducts = value => {
      fetch(`/product/${value}`)
        .then(res => res.json())
        .then(
          data => {
            console.log("data.products - ", data);
            this.setState({
              isLoaded: true,
              products: data
            });
          },
          error => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        );
      console.log("value - ", value);
    };
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <main role="main">
          <div> </div>
          <section className="jumbotron text-center">
            <div className="container">
              <br />

              <h1 className="jumbotron-heading">Sailor Products:</h1>
              <p className="lead text-muted">
                The latest sailor moon inspired merchindise !
              </p>
            </div>
          </section>
          <p>
            Type something in to see if we have any of the platforms or prices
            you are looking for:
          </p>
          <input
            id="myInput"
            type="text"
            placeholder="Search.."
            onChange={e => searchProducts(e.target.value)}
          />
          <div>
            <div className="album py-5 bg-light">
              <div className="container">
                <div className="row">
                  {products.map((products, index) => (
                    <div className="col-md-4">
                      <div className="card mb-4 shadow-sm">
                        <div className="work-img">
                          <div className="img-overlay">
                            <img
                              className="card-img-top img-fluid"
                              src={products.img_url}
                              alt={products.name}
                              height="350"
                              width="100%"
                            />
                          </div>
                        </div>
                        <div className="card-block">
                          <h6>{products.name}</h6>
                          <p className="card-text">{products.description}</p>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                              <button
                                type="button"
                                className="btn btn-sm btn-outline-dark"
                              >
                                View
                              </button>
                              <button
                                type="button"
                                className="btn btn-sm btn-outline-dark"
                              >
                                Buy
                              </button>
                            </div>
                          </div>
                          <small className="p-1 mb-1 bg-info text-white">
                            ${products.amount}
                          </small>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div />
        </main>
      );
    }
  }
}
