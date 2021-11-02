import Head from "next/head";
import { v4 as uuid } from "uuid";
import Image from "next/image";
import { useEffect, useState } from "react";
import { createForm, getEmail, listSubmitData } from "../services/actions/contentful";
import styles from "../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [candidate, setCandidate] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCandidateChange = (e) => {
    setCandidate(e.target.value);
  };
  const fetchData = async () => {
    // const data = await getEmail("thao.lt@gnt.com.vn");
    const data = await listSubmitData();

    console.log(data);
  };

  const submit = async () => {
    console.log(name);
    console.log(email);
    console.log(candidate);
    const params = {
      fullName: name,
      candidate: candidate,
      email,
      author: {
        sys: {
          type: "Link",
          linkType: "Entry",
          id: "7rOsdeN2TZ9QWu5sHwofDT",
        },
      },
    };
    const data = await createForm(params);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="text-center">
        <h1>Content full</h1>
      </div>
      <div className="container">
        <form>
          <div className="mb-3">
            <label for="fullname" className="form-label">
              Full name
            </label>
            <input
              type="text"
              className="form-control"
              id="fullname"
              onChange={handleChange}
              value={name}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Candidate
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              onChange={handleCandidateChange}
              value={candidate}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              onChange={handleEmailChange}
              value={email}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => submit()}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
