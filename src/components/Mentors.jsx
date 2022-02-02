import React, { useEffect, useState, useSelector } from "react";
import { Card, Button, Form, Dropdown, ButtonGroup } from "react-bootstrap";
import "./mentors.css";

import { deleteDataAPI, getMentors } from "../services/api";
import { NavLink } from "react-router-dom";

const Mentors = () => {
  //mentors data
  const [data, setData] = useState([]);
  const [searchText, setSearch] = useState("");

  console.warn("data===>", data);

  useEffect(() => {
    getMentorsData();
  }, []);

  const getMentorsData = async () => {
    const resp = await getMentors();
    setData(resp.data);
    console.log("data====>", resp.data);
  };

  // useEffect(() => {
  //   if (searchText !== "") {
  //     const filteredProducts = data.filter(
  //       (item) =>
  //         item.name.toUpperCase().includes(searchText.toUpperCase()) ||
  //         item.Speciality.toUpperCase().includes(searchText.toUpperCase())
  //     );
  //     setData([...filteredProducts]);
  //   }
  // }, [searchText]);

  // useEffect(() => {
  //   setData([...mymentors]);
  // }, [mymentors]);

  // useEffect(() => {
  //   let filtArr = data.filter((val) => {
  //     val.name.toLowerCase().includes(searchText.toLowerCase()) ||
  //       val.desig.toLowerCase().includes(searchText.toLowerCase());
  //     if (searchText === "") setData(data.data);
  //     else setData(filtArr);
  //   });
  // }, [searchText]);

  const deleteData = async (id) => {
    await deleteDataAPI(id);
    getMentorsData();
  };
  console.log("ak ka name", data.Name);

  return (
    <>
      <div>
        <Form>
          <input
            type="text"
            placeholder="search here"
            onChange={(e) => setSearch(e.target.value)}
          />
        </Form>
        <div className="div1">
          <NavLink to="/">
            <Button variant="dark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-90deg-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4z"
                />
              </svg>
            </Button>
          </NavLink>
          {data &&
            data.map((items) => {
              const {
                id,
                Name,
                desig,
                city,
                phone,
                Speciality,
                country,
                Experience,
              } = items;
              return (
                <Card className="card1" key={items.id}>
                  <Card className="c1">
                    <Card.Img variant="top" src="./employeerimage.jpg" />
                    <Card.Body>
                      <Dropdown as={ButtonGroup}>
                        <Button variant="success">More Details</Button>

                        <Dropdown.Toggle
                          split
                          variant="success"
                          id="dropdown-split-basic"
                        />

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">
                            {Speciality}
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-2">
                            {country}
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            {Experience}
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      {/* <Card.Text>{id}</Card.Text> */}
                      <Card.Title>{Name}</Card.Title>
                      <Card.Title>{desig}</Card.Title>
                      <Card.Text>{city}</Card.Text>
                      <Card.Text>{phone}</Card.Text>
                      <Button variant="secondary" className="btn-1">
                        Edit
                      </Button>
                      <Button
                        variant="secondary"
                        className="btn-1"
                        onClick={() => deleteData(id)}
                      >
                        Delete
                      </Button>
                    </Card.Body>
                  </Card>
                </Card>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Mentors;
