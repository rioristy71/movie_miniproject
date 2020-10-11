import React, { Component } from 'react'

export default class footer extends Component {
    render() {
        return (
                        <div>
                            <div className="row mt-3 mb-5">
                    <div className="col-md-8 col-sm-6" style={{ color: "#5a606b" }}>
                    <h3>C ! N E M A T ! C</h3>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
                        error earum perspiciatis praesentium sint ipsum provident blanditiis
                        pariatur necessitatibus voluptas, cum, atque iste eligendi autem,
                        culpa cupiditate placeat facilis repellat.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
                        perspiciatis? Numquam, enim illo voluptatum neque facere aut sed ut
                        dolore nihil? Nulla sit, recusandae ea tenetur rerum deserunt sequi
                        earum?
                    </p>
                    </div>
                    <div className="col-md-4 col-sm-6" style={{ color: "#5a606b" }}>
                    <h3>Contac </h3>
                    <ul className="list-unstyled">
                        <li>
                        <p>
                            <strong>
                            <i className="fas fa-map-marker-alt"></i> Address:
                            </strong>{" "}
                            Indonesia
                        </p>
                        </li>
                        <li>
                        <p>
                            <strong>
                            <i className="fas fa-map-marker-alt"></i> Phone:
                            </strong>{" "}
                            +62 812xxxxxxxx
                        </p>
                        </li>
                        <li>
                        <p>
                            <strong>
                            <i className="fas fa-envelope"></i> Email:
                            </strong>{" "}
                            C!NEMAT!C@infomail.com
                        </p>
                        <li className="list-inline-item">
                        <a href="/" style={{ color: "#f4c10f" }}>
                            <i className="fab fa-facebook"></i>
                        </a>
                        </li>
                        <li className="list-inline-item">
                        <a href="/" style={{ color: "#f4c10f" }}>
                            <i className="fab fa-youtube"></i>
                        </a>
                        </li>
                        <li className="list-inline-item">
                        <a href="/" style={{ color: "#f4c10f" }}>
                            <i className="fab fa-twitter"></i>
                        </a>
                        </li>
                        <li className="list-inline-item">
                        <a href="/" style={{ color: "#f4c10f" }}>
                            <i className="fab fa-instagram"></i>
                        </a>
                        </li>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        )
    }
}
