import { Box } from "@mui/material"; // Correct Box import
import { Link } from "react-router-dom"; // Use Link from react-router-dom
import React from "react";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#1D2340",
        paddingBottom: "260px",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between", // Ensures the items are spread across
          alignItems: "flex-start", // Aligns the items vertically at the top
          color: "white",
          fontWeight: 200,
          padding: "80px 100px",
        }}
      >
        {/* Left Content */}
        <Box
          sx={{
            display: "grid",
            textAlign: "initial",
            fontWeight: 100,
            color: "white",
          }}
        >
          <p>About Us</p>
          <Box
            component="nav"
            sx={{
              display: "flex",
              flexDirection: "column",
              color: "white",
            }}
          >
            <ul style={{ listStyleType: "none", margin: 0, padding: 0 }}>
              <li>
                <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                  Meet Our Team
                </Link>
              </li>
              <li>
                <Link
                  to="/service"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/works"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Review
                </Link>
              </li>
            </ul>
          </Box>
        </Box>

        {/* Right Content */}
        <Box
          sx={{
            display: "grid",
            rowGap: "10px",
            textAlign: "initial",
            fontWeight: 100,
            color: "white",
          }}
        >
          <p>Get in touch</p>
          <Box
            component="nav"
            sx={{
              display: "flex",
              flexDirection: "column",
              rowGap: "10px",
              color: "white",
            }}
          >
            <ul style={{ listStyleType: "none", margin: 0, padding: 0 }}>
              <li>
                <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/service"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Apply Now
                </Link>
              </li>
              <li>
                <Link
                  to="/works"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Careers
                </Link>
              </li>
            </ul>
          </Box>
        </Box>

        {/* Social Media Icons */}
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "60px",
              height: "60px",
              backgroundColor: "white",
              borderRadius: "50%",
            }}
          >
            {/* Placeholder for Social Media Icon */}
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "60px",
              height: "60px",
              backgroundColor: "white",
              borderRadius: "50%",
            }}
          >
            {/* Placeholder for Social Media Icon */}
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "60px",
              height: "60px",
              backgroundColor: "white",
              borderRadius: "50%",
            }}
          >
            {/* Placeholder for Social Media Icon */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
