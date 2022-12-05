import React, { useEffect, useState } from "react";
import "./Home.css";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { useDispatch, useSelector } from "react-redux";

import Jobseeker from "../../components/jobseeker";
import { getUserJobseeker } from "../../redux/action/user";

function Home() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  // const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [pagination] = useState({});
  const [keyword, setKeyword] = useState("");
  const [column, setColumn] = useState("");

  useEffect(() => {
    getDataUserJobseeker();
  }, [page, keyword]);

  const getDataUserJobseeker = async () => {
    try {
      dispatch(getUserJobseeker(page, keyword, column));
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearchName = async () => {
    dispatch(getUserJobseeker(keyword));
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  console.log(user.pagination);

  return (
    <>
      <Header />
      <div className="container-fluid">
        <main className="home">
          <div className="home-bar">
            <h1 className="home-bar-title">Top Jobs</h1>
          </div>
          <section className="main-section">
            <nav className="navbar-search navbar-expand-xl">
              <div className="collapse-search navbar-collapse">
                <form className="input-searchbar d-flex">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Search"
                    onChange={(e) => {
                      setKeyword(e.target.value);
                    }}
                  />
                  <a
                    className="dropdown-searchbar nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    Sort
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a
                        className="dropdown-item"
                        id="skill"
                        onClick={(e) => setColumn(e.target.id)}
                      >
                        Sortir berdasarkan Skill
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        id="freelance"
                        onClick={(e) => setColumn(e.target.id)}
                      >
                        Sortir berdasarkan Freelance
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        id="fulltime"
                        onClick={(e) => setColumn(e.target.id)}
                      >
                        Sortir berdasarkan Fulltime
                      </a>
                    </li>
                  </ul>
                  <button
                    className="btn-search"
                    type="button"
                    onClick={handleSearchName}
                  >
                    Search
                  </button>
                </form>
              </div>
            </nav>
            <div className="card-profile">
              <main className="main-card-user">
                {user.data.length > 0 ? (
                  user.data.map((item) => (
                    <div key={item.id}>
                      <Jobseeker data={item} />
                    </div>
                  ))
                ) : (
                  <div className="text-center">
                    <h3>Data Not Found</h3>
                  </div>
                )}
              </main>
            </div>
            <div className="d-flex gap-2 justify-content-center w-100 my-5">
              <button
                className="btn btn-primary"
                onClick={handlePrevPage}
                disabled={page === 1 ? true : false}
              >
                &lt;
              </button>
              <div style={{ width: "200px" }}>
                <ul
                  className="d-flex gap-2 align-items-center h-100"
                  style={{ listStyle: "none" }}
                >
                  {(() => {
                    let td = [];
                    for (let i = 1; i <= user.pagination.totalPage; i++) {
                      td.push(
                        <li
                          className="w-100 text-center"
                          style={{
                            border: "1px solid #E2E5ED",
                            width: "25px",
                            height: "50px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 5,
                            cursor: "pointer",
                            color: `${
                              user.pagination.page === i ? "white" : "#9EA0A5"
                            }`,
                            background: `${
                              user.pagination.page === i ? "#5E50A1" : "white"
                            }`,
                          }}
                          key={i}
                        >
                          {i}
                        </li>
                      );
                    }
                    return td;
                  })()}
                </ul>
              </div>
              <button
                className="btn btn-primary"
                onClick={handleNextPage}
                disabled={page === pagination.totalPage ? true : false}
              >
                &gt;
              </button>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Home;
