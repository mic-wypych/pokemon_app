
const Pill = ({ type, isSelected, onClick }) => {
    return (
        <div
        onClick={onClick}
        style={{
            backgroundColor: isSelected ? "#006b7eff" : "#e9e7e7ff",
            border: "1px solid #006b7eff",
            padding: 8,
            borderRadius: 30,
            marginBottom: 8,
            color: isSelected ? "#e9e7e7ff" : "#303030",
            cursor: "pointer",
            outline: isSelected ? "2px solid #fff" : "none",
        }}>
        {type}
        </div>
    );
};

export default Pill;