import React, { useState, useEffect } from "react";
import { getHouses } from "../services/houseService";
import Loading from "../components/Loading";
import styles from "./Houses.module.css";

const Houses = () => {
  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchHouses = async () => {
      try {
        setLoading(true);
        const response = await getHouses(searchTerm);
        setHouses(response.data);
      } catch (err) {
        console.error(
          err.response ? err.response.data : "Error fetching houses"
        );
        setError(err.response ? err.response.data : "Error");
      } finally {
        setLoading(false);
      }
    };

    fetchHouses();
  }, [searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setError(null);
    setHouses([]);
  };

  if (loading) return <Loading />;

  return (
    <>
      <div className={styles["body-container"]}>
        <div className={styles["search-container"]}>
          <div>Search for houses:</div>
          <input
            type="text"
            className={styles.input}
            placeholder="Gryffindor.."
            value={searchTerm}
            onChange={handleSearchChange}
            autoFocus // Automatically focus the input element
          />
        </div>

        {houses.map((house) => {
          const houseColors = house.houseColours.split(" and ");
          const color1 = houseColors[0];
          const color2 = houseColors[1];

          return (
            <div key={house.id} className={styles.card}>
              <div className={styles.intro}>
                <h1>{house.name}</h1>
                <p>{house.animal}</p>{" "}
              </div>
              <div
                className={styles.house}
                style={{
                  background: `linear-gradient(to right, ${color1}, ${color2})`,
                }}
              ></div>

              <p>
                Founder: <b>{house.founder}</b>
              </p>
            </div>
          );
        })}

        {error && (
          <div style={{ color: "red" }} className={styles["body-container"]}>
            Error: {error.message}
          </div>
        )}
      </div>
    </>
  );
};

export default Houses;
