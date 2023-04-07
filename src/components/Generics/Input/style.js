import styled from "styled-components";


const getType = ({ type }) => {
    switch (type) {
        case "dark":
            return {
                background: "transparent",
                border: "1px solid #FFFFFF",
                color: "white",
            };
        case "light":
            return {
                background: "#FFFFFF",
                border: "1px solid #E6E9EC",
                color: "#0D263B",
            };
        case "primary":
            return {
                background: "#0061DF",
                border: "none",
                color: "white",
            };

        default:
            return {
                background: "#0061DF",
                border: "none",
                color: "white",
            };
    }
};

const getWidth = ({ width }) => {
    if (!width) return "130px";
    else if (`${width}`.includes("%")) return "100%";
    else return `${width}px`;
};

const Container = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  min-width: 120px;
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "14px")};
  height: ${({ height }) => (height ? `${height}px` : "44px")};
  width: ${getWidth};
  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  outline:none;
  border:1px solid  #E6E9EC;
  padding-left: ${({ icon }) => (icon ? "35px" : "20px")};
  font-size:15px;
  letter-spacing: 0.07rem;
   ::placeholder{
    color:#0D263B;
  }

  //   ${getType}
//   :active {
//     opacity: 0.7;
//   }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  position: relative;
`;

const Icon = styled.div`
  position: absolute;
  left: 10px;
  display: flex;
`;

export { Container, Wrapper, Icon };
