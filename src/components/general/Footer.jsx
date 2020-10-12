import React, { Component } from 'react'

export default class footer extends Component {
    render() {
        return (
                        <div>
                            <div className="row mt-3 mb-5">
                    <div className="col-md-8 col-sm-6" style={{ color: "#5a606b" }}>
                    <h3>C ! N E M A T ! C</h3>
                    <h5>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
                        error earum perspiciatis praesentium sint ipsum provident blanditiis
                        pariatur necessitatibus voluptas, cum, atque iste eligendi autem,
                        culpa cupiditate placeat facilis repellat.
                    </h5>
                    </div>
                    <div className="col-md-4 col-sm-6" style={{ color: "#5a606b" }}>
                    <h3>Contac </h3>
                    <ul className="list-unstyled">
                        <li>
                        <h5>
                            <strong>
                            <i className="fas fa-map-marker-alt"></i> Address:
                            </strong>{" "}
                            Indonesia
                        </h5>
                        </li>
                        <li>
                        <h5>
                            <strong>
                            <i className="fas fa-map-marker-alt"></i> Phone:
                            </strong>{" "}
                            +62 812xxxxxxxx
                        </h5>
                        </li>
                        <li>
                        <h5>
                            <strong>
                            <i className="fas fa-envelope"></i> Email:
                            </strong>{" "}
                            C!NEMAT!C@infomail.com
                        </h5>
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