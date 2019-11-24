import React from "react";

import ReactDom from "react-dom";

export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      products: []
    };
    this.clothesProducts = e => {
        fetch("/api/users/allClothes")
          .then(res => res.json())
          .then(
            data => {
              this.setState(
                {
                  isLoaded: true,
                  products: data
                },
                console.log(data)
              );
            },
            error => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          );
        console.log("this is changing");
      };
    //Fetches an api that returns data that only has the category of "Systems"
    this.jewelryProducts = e => {
      fetch("/api/products/Jewelry")
        .then(res => res.json()) //takes the response and turns it into a json objet
        .then(
          data => {
            this.setState(
              {
                // returns the empty product array with data
                isLoaded: true,
                products: data
              },
              console.log(data)
            );
          },
          error => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        );

      //fetches the data with prices high to low and places them in DESC order
      this.highToLow = e => {
        fetch("/api/productFilter/High")
          .then(res => res.json())
          .then(
            data => {
              this.setState(
                {
                  isLoaded: true,
                  products: data
                },
                console.log(data)
              );
            },
            error => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          );
      };
      //fetches the data with prices low to high and places them in ASCorder
      this.lowToHigh = e => {
        fetch("/api/productFilter/Low")
          .then(res => res.json())
          .then(
            data => {
              this.setState(
                {
                  isLoaded: true,
                  products: data
                },
                console.log(data)
              );
            },
            error => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          );

        console.log("this is changing");
      };
      //Returns all the products back to the page and places them back on the screen back by their product id's
      this.allProducts = e => {
        fetch("/api/products")
          .then(res => res.json())
          .then(
            data => {
              this.setState(
                {
                  isLoaded: true,
                  products: data
                },
                console.log(data)
              );
            },
            error => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          );
        console.log("this is changing");
      };

      // returns all the data with the category = 'Clothes'
      this.clothesProducts = e => {
        fetch("/api/users/allClothes")
          .then(res => res.json())
          .then(
            data => {
              this.setState(
                {
                  isLoaded: true,
                  products: data
                },
                console.log(data)
              );
            },
            error => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          );
        console.log("this is changing");
      };
      // returns all the data with the category = 'Toys'

      this.toysProducts = e => {
        fetch("/api/products/Toys")
          .then(res => res.json())
          .then(
            data => {
              this.setState(
                {
                  isLoaded: true,
                  products: data
                },
                console.log(data)
              );
            },
            error => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          );
        console.log("this is changing");
      };
    };
  }
  // When page renders it will fetch all the products and place the data in an empty array which will be mapped out.
  componentDidMount() {
    fetch("/api/users/allProducts")
      .then(res => res.json())
      .then(
        data => {
          this.setState(
            {
              isLoaded: true,
              products: data
            },
            console.log(data)
          );
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
    const { error, isLoaded, products } = this.state; // move the state down

    if (error) {
      return <div>Error: {error.message}</div>; // If error then return error message
    } else if (!isLoaded) {
      return <div>Loading...</div>; // if the page doesnt load return 'Loading...'
    } else {
      return (
        <main role="main">
          <section class="jumbotron text-center" id="pwrap">
            <div class="container lol">
              <br />
              <h1 className="jumbotron-heading">Sailor Products:</h1>
              <p class="lead">The latest sailor moon inspired merchindise !</p>
            </div>
          </section>

          <div className="btn-product_cont">
            <button className="btn-product" onClick={this.allProducts}>
              All
            </button>
            {/* <button className="btn-product" onClick={this.jewelryProducts}>
              Jewelry
            </button> */}
            {/* <button className="btn-product" onClick={this.toysProducts}>
              Toys
            </button>
            <button className="btn-product" onClick={this.clothesProducts}>
              Clothes
            </button> */}
            <button className="btn-product" onClick={this.highToLow}>
              High-to-Low
            </button>
            <button className="btn-product" onClick={this.lowToHigh}>
              Low-To-High
            </button>
          </div>

          <div>
            <div class="album py-5">
              <div className="container">
                <div className="row">
                  {products.map((products, index) => (
                    <div className="col-md-4">
                      <div className="card-deck">
                        <div className="card" id="foo">
                          <img
                            src={products.img_url}
                            alt={products.name}
                            height="350"
                            width="100%"
                            className="card-img-top rounded"
                          />

                          <div className="card-body">
                            <h6 className="card-title">{products.name}</h6>

                            <p className="card-text ">{products.description}</p>

                            <div className="card-footer">
                              <small className="price">${products.price}</small>
                              <button
                                type="button"
                                className="btn btn-info float-right"
                              >
                                Buy
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      );
    }
  }
}
