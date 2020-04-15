import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Navbar from "./Navbar";
import SearchForm from "./SearchForm";
import { HandleChange, HandleSearch } from "./models/interfaces";
import LinksList from "./LinksList";

function App() {
  const [showLinks, toggleLinks] = useState(false);
  const [keywords, setKeywords] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  const handleSearchChange: HandleChange = (e) => {
    toggleLinks(false)
    const target = e.target as HTMLInputElement;
    console.log(target.name);
    if (target.name === "keyword") {
      setKeywords(target.value);
    } else {
      setLocation(target.value);
    }
  };

  const handleSearchParams: HandleSearch = (e) => {
    e.preventDefault();
    if (!keywords || !location) {
      console.log("enter ");
    }
    toggleLinks(true);
    console.log(keywords, "----", location);
  };

  return (
    <Container>
      <Navbar />
      <SearchForm
        handleSearchChange={handleSearchChange}
        handleSearchParams={handleSearchParams}
      />
      {showLinks ? <LinksList keywords={keywords} location={location} /> : null}
    </Container>
  );
}

export default App;
