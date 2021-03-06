export const customStyles = (small: boolean) => ({
  option: () => ({
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
    backgroundColor: "transparent",
    boxSizing: "border-box",
    color: "inherit",
    cursor: "default",
    display: "block",
    fontSize: "inherit",
    padding: ".5em .1em",
    userSelect: "none",
    width: "100%",
    borderBottom: "1px solid #de4270"
  }),
  dropdownIndicator: () => ({ display: "none" }),
  indicatorSeparator: () => ({ display: "none" }),
  container: () => ({
    display: "inline-block",
    boxSizing: "border-box",
    position: "relative",
    paddingLeft: "0.5em",
    paddingBottom: "0.5rem",
    height: "100%",
    justifyContent: "center"
  }),
  multiValue: () => ({
    color: "#e7e7e7",
    boxSizing: "border-box",
    display: "flex",
    margin: 2
  }),
  multiValueRemove: () => ({
    borderRadius: "0px 10px 25% 0px",
    backgroundColor: "#de4270",
    alignItems: "center",
    display: "flex",
    boxSizing: "border-box",
    paddingLeft: 4,
    paddingRight: 4,
    color: "#e7e7e7"
  }),
  multiValueLabel: () => ({
    borderRadius: "10px 0px 0px 10px",
    backgroundColor: "#de4270",
    color: "#e7e7e7",
    overflow: "hidden",
    padding: 3,
    paddingLeft: 6,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    boxSizing: "border-box"
  }),
  control: () => ({
    border: 0,
    alignItems: "center",
    background: "transparent",
    borderBottom: "1px solid #de4270",
    minWidth: small ? 100 : 250,
    borderRadius: 4,
    boxShadow: null,
    boxSizing: "border-box",
    cursor: "default",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    minHeight: 38,
    outline: "0 !important",
    position: "relative",
    transition: "all 100ms"
  }),
  singleValue: () => ({
    color: "#e7e7e7",
    backgroundColor: "#de4270",
    borderRadius: "10px",
    boxSizing: "border-box",
    display: "flex",
    padding: ".25em 1em"
  }),
  menu: () => ({
    top: "100%",
    backgroundColor: "#fcfcfc",
    borderRadius: 4,
    boxShadow: "2px 2px 2px 2px rgba(0, 0, 0, 0.2)",
    marginTop: "-4px",
    position: "absolute",
    width: "100%",
    zIndex: 1,
    boxSizing: "border-box"
  }),
  menuList: () => ({
    maxHeight: 300,
    overflowY: "auto",
    paddingBottom: 4,
    paddingTop: 4,
    position: "relative",
    backgroundColor: "#fcfcfc",
    WebkitOverflowScrolling: "touch",
    boxSizing: "border-box"
  })
});
