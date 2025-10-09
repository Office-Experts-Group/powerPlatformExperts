import React from "react";

const Quote = () => {
  return (
    <section
      style={{
        marginTop: "1rem",
        color: "#046999",
        fontStyle: "italic",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "1.25rem",
        fontWeight: "700",
        lineHeight: "2rem",
        padding: "0 10vw",
      }}
    >
      <p style={{ textAlign: "center" }}>
        With 25 years of Microsoft expertise, our certified specialists bring
        deep platform knowledge and a proven track record to every project. We
        provide complete end-to-end solutions, from initial strategy and
        planning through design, development, training, and ongoing support.
      </p>
    </section>
  );
};

export default Quote;
